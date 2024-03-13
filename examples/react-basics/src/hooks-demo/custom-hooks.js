import { useState, useEffect, useDebugValue } from 'react';

export const useLocalState = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? storedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  // useDebugValue(key);
  // useDebugValue(value);

  useDebugValue({ [key]: value });

  return [value, setValue];
};

export const useSessionState = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? storedValue : initialValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, value);
  }, [key, value]);

  useDebugValue({ [key]: value });

  return [value, setValue];
};

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch(setError);
  }, [url]);

  useDebugValue({ data, isLoading, error, url });

  return { data, isLoading, error };
};
