import { FormikProps } from "formik";

export interface AddAddressProps {
    address?: any;
    addAddressToggleDrawer: any;
    onCloseDrawer: any;
    setAddressChange: React.Dispatch<React.SetStateAction<boolean>>;
}