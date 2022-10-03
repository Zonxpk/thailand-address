let provinces = require("./address/provinces.json");
let districts = require("./address/districts.json");
let subDistricts = require("./address/sub_districts.json");

app = {};

app.getProvinces = () => {
  return provinces;
};

app.getDistricts = (provinceId) =>
  districts.filter((data) => data.province_id == provinceId);

app.getSubDistricts = (districtId) =>
  subDistricts.filter((data) => data.district_id == districtId);

app.getZipCodeBySubDistrict = (subDistrictId) =>
  subDistricts.find((data) => data.id == subDistrictId)?.zip_code;

module.exports = app;
