let provinces = require("./address/provinces.json");
let districts = require("./address/districts.json");
let subDistricts = require("./address/sub_districts.json");

const app = {
  getProvinces: () => provinces,
  getProvinceById: (provinceId) =>
    provinces.find((data) => data.id === provinceId),
  getDistricts: (provinceId) =>
    districts.filter((data) => data.province_id == provinceId),
  getDistrictById: (districtId) =>
    districts.find((data) => data.id === districtId),
  getSubDistricts: (districtId) =>
    subDistricts.filter((data) => data.district_id == districtId),
  getSubDistrictById: (districtId) =>
    subDistricts.find((data) => data.id == districtId),
  getZipCodeBySubDistrict: (subDistrictId) =>
    subDistricts.find((data) => data.id == subDistrictId)?.zip_code,
};

module.exports = app;
