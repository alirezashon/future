import { useState } from 'react';

import provinces from './province.json'
import cities from './cities.json'
import styles from '@/styles/profile/ProvinceSelector/ProvinceSelector.module.css';

export default function CascadingSelectBox() {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleProvinceChange = (event) => {
    const provinceId = event.target.value;
    setSelectedProvince(provinceId);

    // Filter the cities based on the selected province
    const filteredCities = cities.filter(city => city.province_id === parseInt(provinceId));
    
    // If the selected province has cities, set the first city as the selected city
    if (filteredCities.length > 0) {
      setSelectedCity(filteredCities[0].id);
    } else {
      setSelectedCity(null);
    }
  };

  const handleCityChange = (event) => {
    const cityId = event.target.value;
    setSelectedCity(cityId);
  };

  return (
   <div className={styles.container}>
      <label htmlFor="province" className={styles.label}>استان:</label>
      <select id="province" name="province" className={styles.select} onChange={handleProvinceChange}>
        <option value="">انتخاب کنید</option>
        {provinces.map(province => (
          <option key={province.id} value={province.id}>{province.name}</option>
        ))}
      </select>

      <label htmlFor="city" className={styles.label}>شهر:</label>
      <select id="city" name="city" className={styles.select} onChange={handleCityChange} disabled={!selectedProvince}>
        <option value="">انتخاب کنید</option>
        {cities
          .filter(city => city.province_id === parseInt(selectedProvince))
          .map(city => (
            <option key={city.id} value={city.id}>{city.name}</option>
          ))
        }
      </select>

      <p className={styles.selected}>استان انتخاب شده: {selectedProvince ? provinces.find(province => province.id === parseInt(selectedProvince)).name : 'هیچ'}</p>
      <p className={styles.selected}>شهر انتخاب شده: {selectedCity ? cities.find(city => city.id === parseInt(selectedCity)).name : 'هیچ'}</p>
    </div>
  );
}
