import React, { useEffect } from 'react';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();
  const client = useApolloClient();

  useEffect(() => {
    function resetStoreAndNavigate() {
      localStorage.setItem("id_token", "");
      client.resetStore();
      navigate('/');
    }

    resetStoreAndNavigate();
  }, [navigate, client]);

  return null;
}