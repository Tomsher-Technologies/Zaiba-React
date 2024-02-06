import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

import OutlinedTextInput from '@/components/CustomComponents/OutlinedTextInput';

import { GoogleMapAPIProps } from '@/types/AccountProps';
type Map = google.maps.Map
const containerStyle = {
    width: '100%',
    height: '400px'
};

const GoogleMapAPI: FC<GoogleMapAPIProps> = ({ formik, positions }) => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const mapRef = useRef<Map>();
    const inputRef = useRef(null);

    const [libraries, setLibraries] = useState<any>(['places', 'drawing']);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey as any,
        libraries: libraries,
    });

    const {
        placesService,
        placePredictions,
        getPlacePredictions,
        isPlacePredictionsLoading,
    } = usePlacesService({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const [map, setMap] = useState<any>(null);
    const [initialCenter, setinitialCenter] = useState<any>({
        lat: 25.230644089090628,
        lng: 55.32105845372453
    });
    const [clickedLatLng, setClickedLatLng] = useState<any>(null);
    const [addressDetails, setAddressDetails] = useState<any>(null);
    const [suggestions, setSuggestions] = useState([]);


    useEffect(() => {
        if (placePredictions.length)
            (placesService as any)?.getDetails({
                placeId: placePredictions[0].place_id,
            });
    }, [placePredictions]);



    useEffect(() => {
        if ((!clickedLatLng) && formik && (formik.values.latitude || formik.values.longitude)) {
            console.log('formik', formik);
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
    // console.log('positions', positions);
    useEffect(() => {
        if (positions) {
            setinitialCenter({
                lat: parseFloat(positions.lat),
                lng: parseFloat(positions.lng)
            });
            setClickedLatLng({
                lat: parseFloat(positions.lat),
                lng: parseFloat(positions.lng)
            });
        }
    }, [positions]);

    const fetch_address = (coord: any) => {
        fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + coord.lat + ',' + coord.lng + '&key=' + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
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
                            formik.setFieldValue('city', address_component.long_name);
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
        mapRef.current = mapInstance
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

    const handlePlaceSelected = (placeId: any) => {
        const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));
        placesService.getDetails({ placeId: placeId }, (place: any, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                const { lat, lng } = place.geometry.location;
                setinitialCenter({ lat: lat(), lng: lng() });
                getAddressWithFromLatLng(lat(), lng());
                setClickedLatLng({
                    lat: lat(),
                    lng: lng()
                });
                formik.setFieldValue('latitude', lat());
                formik.setFieldValue('longitude', lng());
                fetch_address({
                    lat: lat(),
                    lng: lng()
                });
                setSuggestions([]);
                (inputRef as any).current.value = "";
            }
        });
    };

    const handleInputChange = (event: any) => {
        const inputText = event.target.value;
        const autocompleteService = new window.google.maps.places.AutocompleteService();
        autocompleteService.getPlacePredictions({ input: inputText }, (predictions: any, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setSuggestions(predictions);
            } else {
                setSuggestions([]);
            }
        });
    };
    // console.log('formik.values.latitude', formik.values.latitude);

    return (
        <div >
            {isLoaded ? (
                <div className='w-full  relative flex items-center justify-center'>
                    {!positions &&
                        <div className='w-[55%] absolute z-30 top-0'>
                            <OutlinedTextInput
                                placeholder="Enter on your place"
                                className="w-full rounded-full !overflow-hidden"
                                labelClassName='font-semibold'
                                name="phone"
                                onChange={handleInputChange}
                                textPadding='4px'
                                inputRef={inputRef}
                            />
                            {suggestions.length > 0 &&
                                <div className="bg-white space-y-2 p-2">
                                    {suggestions.map((suggestion: any, index: number) => (
                                        <div
                                            key={suggestion.place_id}
                                            className="cursor-pointer hover:text-blue-400 border-b border-gray-100"
                                            onClick={() => handlePlaceSelected(suggestion.place_id)}
                                        >
                                            {suggestion.description}
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>}
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={initialCenter}
                        zoom={14}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        onClick={handleMapClick}
                    // satalite option hide on global css page
                    // clickableIcons={false}
                    >
                        {(clickedLatLng) && <Marker
                            position={(clickedLatLng)}
                        />
                        }
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

