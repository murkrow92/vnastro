/**
 * Created by murkrow on 6/29/17.
 */

const queryString = require("query-string");
const lodash = require('lodash');

const checkStatus = response => {
    let json = response.json();
    if (response.status === 200) {
        return json;
    } else {
        return json.then(Promise.reject.bind(Promise));
    }
};

const postRequest = (url, body, headers) =>
    fetch(url, {method: "POST", body, headers}).then(checkStatus).catch(error => console.log(error));

const getRequest = (url, headers) => fetch(url, {headers}).then(checkStatus);

const putRequest = (url, body, headers) =>
    fetch(url, {method: "PUT", body, headers}).then(checkStatus);


export class API {

    static ACCESS_TOKEN;

    constructor() {
        this.API_ENDPOINT = "http://api.vnastro.com/1.0";
    }

    fetchAstro(datetime) {
        let query = queryString.stringify({
            year: datetime.getFullYear(),
            month: datetime.getMonth() + 1,
            day: datetime.getDate(),
            hour: datetime.getHours(),
            minute: datetime.getMinutes()
        });

        return getRequest(`${this.API_ENDPOINT}/astro?${query}`);
    }

    fetchNotifications() {
        return getRequest(`${this.API_ENDPOINT}/notify`);
    }

    fetchConversation(conversationId) {
        if (conversationId === '0') {
            conversationId = 1;
        }
        let query = queryString.stringify({
            id: conversationId
        });
        let url = `${this.API_ENDPOINT}/conversation?${query}`;
        return getRequest(url);
    }

    fetchDetailCombo(combo) {
        const body = new FormData();
        lodash.forEach(combo, function (value, key) {
            body.append(key, value);
        });

        let url = `${this.API_ENDPOINT}/astro/mean`;
        return postRequest(url, body);
    }

    fetchFriend() {
        return getRequest(`${this.API_ENDPOINT}/contact`);
    }

    addFriend(profile, friend) {
        const body = new FormData();
        lodash.forEach(friend, function (value, key) {
            body.append(key, value);
        });
        body.append("user_id", profile.id);
        let url = `${this.API_ENDPOINT}/contact/add`;
        return postRequest(url, body);
    }

    fetchTransaction(userId) {
        userId = 2;
        let query = queryString.stringify({
            user_id: userId,
            status: 1
        });
        let url = `${this.API_ENDPOINT}/transaction?${query}`;
        return getRequest(url);
    }

    saveProfile(profile) {
        const body = new FormData();
        const keys = ["id", "email", "day", "month", "hour", "minute", "phone", "year"];
        lodash.forEach(keys, function (value, key) {
            if (value === "id") {
                value = "user_id";
            }
            if (profile.hasOwnProperty(value)) {
                body.append(value, profile[value]);
            }
        });
        let url = `${this.API_ENDPOINT}/user/update`;
        console.log(url);
        console.log(profile);
        return postRequest(url, body);
    }

    login(email, facebookId) {
        const body = new FormData();
        body.append("email", email);
        body.append("fb_id", facebookId);
        let url = `${this.API_ENDPOINT}/user/fbconnect`;
        return postRequest(url, body);
    }

    fetchUserProfile() {
        let query = queryString.stringify({
            access_token: API.ACCESS_TOKEN
        });
        const url = `${this.API_ENDPOINT}/user?${query}`;
        return getRequest(url);
    }

}
