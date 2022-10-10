let provinces = require("./address/provinces.json");
let districts = require("./address/districts.json");
let subDistricts = require("./address/sub_districts.json");

const app = {
  getProvinces: () => provinces,
  getDistricts: (provinceId) =>
    districts.filter((data) => data.province_id == provinceId),
  getSubDistricts: (districtId) =>
    subDistricts.filter((data) => data.district_id == districtId),
  getZipCodeBySubDistrict: (subDistrictId) =>
    subDistricts.find((data) => data.id == subDistrictId)?.zip_code,
};

module.exports = app;
