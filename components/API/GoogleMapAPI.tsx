import React, { FC, Fragment, useCallback, useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


import { GoogleMapAPIProps } from '@/types/AccountProps';

const containerStyle = {
    width: '100%',
    height: '400px'
};

let initialCenter = {
    lat: 25.230644089090628,
    lng: 55.32105845372453
};

const GoogleMapAPI: FC<GoogleMapAPIProps> = ({ formik, positions }) => {

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey as any
    });

    const [map, setMap] = useState(null);
    const [clickedLatLng, setClickedLatLng] = useState<any>(null);
    const [addressDetails, setAddressDetails] = useState<any>(null);

    useEffect(() => {
        if ((!clickedLatLng) && formik && (formik.values.latitude || formik.values.longitude)) {
            setClickedLatLng({
                lat: formik.values.latitude,
                lng: formik.values.longitude
            });
            fetch_address({
                lat: formik.values.latitude,
                lng: formik.values.longitude
            });

            getAddressWithFromLatLng(formik.values.latitude, formik.values.longitude)
        }

    }), [clickedLatLng, formik, positions];

    // useEffect(() => {
    //     if (positions) {
    //         setClickedLatLng({
    //             lat: positions.latitude,
    //             lng: positions.longitude
    //         });
    //     }
    // }), [positions]

    const fetch_address = (coord: any) => {
        fetch(
            'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
            coord.lat +
            ',' +
            coord.lng +
            '&key=' +
            process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        )
            .then((res) => res.json())
            .then((json) => {
                let routeAddress = json.results.find((data: any) => data.types = 'route');

                if (routeAddress) {
                    routeAddress.address_components.forEach((address_component: any) => {
                        if (address_component.types.includes("country")) {
                            formik.setFieldValue('country', address_component.long_name);
                        } else if (address_component.types.includes("administrative_area_level_1")) {
                            formik.setFieldValue('state', address_component.long_name);
                        } else if (address_component.types.includes("locality")) {
                            formik.setFieldValue('city', address_component.city);
                        }
                        // else if (address_component.types.includes("sublocality_level_1")) {
                        //     area = address_component.long_name;
                        // } else if (address_component.types.includes("route")) {
                        //     route = address_component.long_name;
                        // } else if (address_component.types.includes("postal_code")) {
                        //     postal_code = address_component.long_name;
                        // }
                    });

                    // console.log('clickedLatLng', clickedLatLng);
                }

            });
    };

    const onLoad = useCallback(function callback(mapInstance: any) {
        setMap(mapInstance);
    }, []);

    const onUnmount = useCallback(function callback() {
        setMap(null);
    }, []);

    const handleMapClick = useCallback((event: any) => {
        if (formik) {
            setClickedLatLng({
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            });
            fetch_address({
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            });
            formik.setFieldValue('latitude', event.latLng.lat());
            formik.setFieldValue('longitude', event.latLng.lng());

            getAddressFromLatLng(event.latLng);
        }

    }, []);

    const getAddressFromLatLng = (latLng: any) => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: latLng }, (results, status) => {
            if (status === 'OK' && results && results.length > 0) {
                setAddressDetails(results[0]);

            } else {
                console.error('Geocode was not successful for the following reason:', status);
                setAddressDetails(null);
            }
        });
    };

    const getAddressWithFromLatLng = (latitude: number, longitude: number) => {
        const geocoder = new window.google.maps.Geocoder();
        const latLng = { lat: parseFloat(latitude as any), lng: parseFloat(longitude as any) };

        return new Promise((resolve, reject) => {
            geocoder.geocode({ location: latLng }, (results, status) => {
                if (status === 'OK' && results && results.length > 0) {
                    setAddressDetails(results[0]);
                    resolve(results[0].formatted_address);
                } else {
                    reject('Geocode was not successful or no address found');
                }
            });
        });
    };

    return (
        <div>
            {isLoaded ? (
                <div className='w-full'>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={initialCenter}
                        zoom={14}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        onClick={handleMapClick}
                    // clickableIcons={false}
                    >
                        {(positions || clickedLatLng) && <Marker
                            position={(positions || clickedLatLng)}
                        />} {/* Show marker at clicked position */}
                    </GoogleMap>
                </div>
            ) : (
                <div>Map not loading...</div>
            )}
            {addressDetails && (
                <div className='mt-5'>
                    <p> {addressDetails?.formatted_address}</p>
                </div>
            )}
        </div>
    );
};

export default GoogleMapAPI;


// import React, { FC, Fragment, useCallback, useMemo, useState } from 'react';
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// const containerStyle = {
//     width: '400px',
//     height: '400px'
// };

// const center = {
//     lat: -3.745,
//     lng: -38.523
// };



// const GoogleMapAPI: FC = () => {
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: 'AIzaSyBvX-pulyU5QGtgqVbC-BPHjNYO8pRu7vU',
//     });
//     const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

//     return (
//         <div className="App">
//             {!isLoaded ? (
//                 <h1>Loading...</h1>
//             ) : (
//                 <>
//                     <h5>Loading...</h5>
//                     <GoogleMap
//                         mapContainerClassName="map-container"
//                         center={center}
//                         zoom={10}
//                     />
//                 </>
//             )}
//         </div>
//     );
// };

// export default GoogleMapAPI;