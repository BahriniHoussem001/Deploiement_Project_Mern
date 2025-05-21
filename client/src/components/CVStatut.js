import { useEffect, useState } from "react";

const CVStatut = ({ candidateId }) => {
  const [cvViews, setCvViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/candidates/${candidateId}`);
        const data = await res.json();
        setCvViews(data.cvViews || 0);
      } catch (err) {
        console.error("Erreur de récupération du statut du CV :", err);
      }
    };
    fetchViews();
  }, [candidateId]);

  return (
    <div className="mt-3">
      <strong>👀 Votre CV a été consulté {cvViews} fois</strong>
    </div>
  );
};

export default CVStatut;
