import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './config.jsx'; // Importa la configuración global donde se encuentra Bootstrap

function CouponSystem() {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [couponCount, setCouponCount] = useState(0);
  const navigate = useNavigate();

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
    setCouponCount(0); // Reiniciar cupones al seleccionar una nueva empresa
  };

  const handleAddCoupon = () => {
    if (couponCount < 10) {
      setCouponCount(couponCount + 1);
    }
  };

  const handleClaimReward = () => {
    alert(`¡Felicidades! Has obtenido un regalo de la empresa: ${selectedCompany}.`);
    setCouponCount(0);
  };

  const handleRegister = () => {
    navigate('/register-options'); // Redirigir a la página de opciones de registro
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Sistema de Cupones</h1>

      <div className="text-center my-4">
        <label htmlFor="empresaSelect" className="form-label">Selecciona una empresa:</label>
        <select
          id="empresaSelect"
          className="form-select w-50 mx-auto"
          value={selectedCompany}
          onChange={handleCompanyChange}
        >
          <option value="" disabled>Elige una empresa</option>
          <option value="Empresa Alpha">Empresa Alpha</option>
          <option value="Compañía Beta">Compañía Beta</option>
          <option value="Corporación Gamma">Corporación Gamma</option>
          <option value="Grupo Delta">Grupo Delta</option>
          <option value="Industria Épsilon">Industria Épsilon</option>
        </select>
      </div>

      <div className="text-center my-4">
        <button
          className="btn btn-primary"
          onClick={handleAddCoupon}
          disabled={!selectedCompany || couponCount >= 10}
        >
          Agregar Cupón
        </button>
      </div>

      <div className="coupon-container d-flex flex-wrap justify-content-center">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`coupon ${i < couponCount ? 'active' : 'inactive'} d-flex align-items-center justify-content-center`}
          >
            {i < couponCount ? i + 1 : ''}
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button
          className={`btn btn-success ${couponCount < 10 ? 'disabled' : ''}`}
          onClick={handleClaimReward}
          disabled={couponCount < 10}
        >
          Obtener Regalo
        </button>
      </div>

      <div className="text-center mt-4">
        <button
          className="btn btn-warning"
          onClick={handleRegister}
        >
          Opciones para Registrar
        </button>
      </div>
    </div>
  );
}

export default CouponSystem;
