import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Search.module.css';

const Search = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${searchTerm}`);
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} className={styles.searchInput} />
      <button type="submit" className={styles.searchButton}>Search</button>
    </form>
  );
};

export default Search;
