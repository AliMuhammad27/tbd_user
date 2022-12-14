export let connection_string;
export let image_url;
export let vendor_register;
export let vendor_login;

if (window.location.hostname == "localhost") {
  connection_string = "https://localhost:5030/api/v1";
  image_url = "https://localhost:5030/";
  vendor_register = "https://localhost:3001/register";
  vendor_login = "https://localhost:3001/";
} else if (window.location.hostname == "saintshop.online") {
  connection_string = "https://saintshop.online:5044/api/v1";
  image_url = "https://saintshop.online:5044";
  vendor_register = "https://saintshop.online/vendor/register";
  vendor_login = "https://saintshop.online/vendor";
} else {
  connection_string = "https://dev74.onlinetestingserver.com:5044/api/v1";
  image_url = "https://dev74.onlinetestingserver.com:5044";
  vendor_register = "https://dev74.onlinetestingserver.com/tbd/vendor/register";
  vendor_login = "https://dev74.onlinetestingserver.com/tbd/vendor";
}
