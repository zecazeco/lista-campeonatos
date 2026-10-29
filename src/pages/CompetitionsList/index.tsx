import React from 'react';
import { Competition, Status, TopBar } from '../../components';
import api from '../../services/api';
import useApi from '../../hooks/useApi';

import { ICompetition } from '../../interfaces/competition';

function CompetitionsList() {
  const fetchCompetitions = async () => {
    const { data } = await api.get('/competitions');
    return data as ICompetition[];
  };

  const { data: competitions, loading, error } = useApi(fetchCompetitions, []);

  return (
    <>
      <TopBar title="Campeonatos" />
      <div className="list">
        <Status loading={loading} error={error} empty={competitions.length === 0} />
        {
          competitions.map((item) => (
            <Competition
              key={item.id}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              description={item.description}
            />
          ))
        }
      </div>
    </>
  );
}

export default CompetitionsList;
