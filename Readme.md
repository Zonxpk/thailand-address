`npm install @zonxpk/thailand-address`

`import thailandAddress from '@zonxpk/thailand-address'`

`let thailandAddress = require('@zonxpk/thailand-address')`

```
console.log(thailandAddress.getProvinces())
console.log(thailandAddress.getDistricts(1))
console.log(thailandAddress.getSubDistricts(1))
console.log(thailandAddress.getZipCodeBySubDistrict(1))
```

- `getProvinces()`

- `getDistricts(provinceId)`

- `getSubDistricts(districtId)`

- `getZipCodeBySubDistrict(subDistrictId)`
