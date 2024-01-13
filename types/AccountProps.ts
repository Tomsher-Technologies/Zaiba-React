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