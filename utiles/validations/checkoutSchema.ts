import * as Yup from 'yup';

export const checkoutValidationSchema = Yup.object().shape({
    address_id: Yup.string().required('Shipping address is required. Choose or create address'),
    payment_method: Yup.string().test('walletOrCashOnDelivery', 'Choose either Wallet or Cash On Delivery', function (value) {
        const walletSelected = this.parent.wallet; // Getting value of 'wallet' field
        const cashOnDeliverySelected = value === 'cash_on_delivery'; // Checking if 'cash_on_delivery' is selected in 'payment_method'
        if ((walletSelected && cashOnDeliverySelected)) {
            return false; // Invalid if both or neither 'wallet' and 'cash_on_delivery' are selected
        }
        return true; // Valid if either 'wallet' or 'cash_on_delivery' is selected
    }),
    email: Yup.string().test('conditionalValidation', 'Email is required ', function (value) {
        const billingShippingSame = this.parent.billing_shipping_same;
        if (billingShippingSame === 0 && !value) {
            return false;
        }
        return true; // Validation passes
    }),
    name: Yup.string().test('conditionalValidation', 'Name is required ', function (value) {
        const billingShippingSame = this.parent.billing_shipping_same;
        if (billingShippingSame === 0 && !value) {
            return false;
        }
        return true;
    }),
    address: Yup.string().min(6, 'Address must be at least 6 characters').test('conditionalValidation', 'Address is required ', function (value) {
        const billingShippingSame = this.parent.billing_shipping_same;
        if (billingShippingSame === 0 && (!value || value.length < 6)) {
            return false;
        }
        return true;
    }),
    phone: Yup.string().test('conditionalValidation', 'Phone must have at least 9 digits', function (value) {
        const billingShippingSame = this.parent.billing_shipping_same;
        if (billingShippingSame === 0 && (!value || !/^\d{9,}$/.test(value))) {
            return false;
        }
        return true;
    }),
    latitude: Yup.string().test('conditionalValidation', 'Please mark your address', function (value) {
        const billingShippingSame = this.parent.billing_shipping_same;
        if (billingShippingSame === 0 && !value) {
            return false;
        }
        return true;
    }),
    longitude: Yup.string().test('conditionalValidation', 'Please mark your address', function (value) {
        const billingShippingSame = this.parent.billing_shipping_same;
        if (billingShippingSame === 0 && !value) {
            return false;
        }
        return true;
    }),
});

