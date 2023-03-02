import axios from "axios";

const fetchCouponRequest = () => ({
    type: "FETCH_COUPON_REQUEST",
});

const fetchCouponSuccess = (data) => ({
    type: "FETCH_COUPON_SUCCESS",
    payload: data,
});

const fetchCouponFailure = (error) => ({
    type: "FETCH_COUPON_FAILURE",
    payload: error,
});

export const fetchDataCoupon = (categoryId) => {
    return (dispatch) => {
        dispatch(fetchCouponRequest());
        axios
            .get("https://requestly.dev/api/mockv2/getCoupon?username=user1673281842743")
            .then((response) => {
                const data = response.data;

                if (categoryId) {
                    data.result = data.result.filter((item) => item.couponCategoryId === categoryId);
                }

                dispatch(fetchCouponSuccess(data));
            })
            .catch((error) => {
                const errorMsg = error.message;
                dispatch(fetchCouponFailure(errorMsg));
            });
    }
}
