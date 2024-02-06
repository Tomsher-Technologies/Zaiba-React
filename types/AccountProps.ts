import { FormikProps } from "formik";

export interface ProfileProps {
    user: any;
}

export interface OrderProps {
    user: any;
}

export interface ReturnsProps {
    user: any;
}

export interface AddAddressesProps {
    user: any;
}

export interface AddressRowProps {
    address: any;
    makeDefaultAddress: any;
    makeDefaultAddressLoading: boolean;
    refetchAddress: any;
}

export interface ShippingDetailsProps {
    user: any;
    checkoutFormik: FormikProps<any>;
    addressLists: any[];
    addressLists_loading: boolean;
    setAddressChange: React.Dispatch<React.SetStateAction<boolean>>;
    addressChange:boolean;
}

export interface AddressListRowProps {
    checkoutFormik: FormikProps<any>;
    address: any;
    setAddressChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface BillingAddressProps {
    checkoutFormik: FormikProps<any>;
}

export interface WishlistProps {
    user: any;
}

export interface PaymentsProps {
    user: any;
}

export interface GoogleMapAPIProps {
    formik?: any;
    positions?: any;
}

export interface ChangePasswordModalProps {
    address: any;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen?: boolean;
}