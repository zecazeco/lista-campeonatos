import React from 'react';
import { useParams } from 'react-router-dom';
import { Status, Team, TopBar } from '../../components';
import api from '../../services/api';
import useApi from '../../hooks/useApi';

import { ITeam } from '../../interfaces/team';

function TeamsList() {
  const params = useParams();

  const fetchTeams = async () => {
    const { data } = await api.get(`/competitions/${params.id}/teams`);
    return data as ITeam[];
  };

  const { data: teams, loading, error } = useApi(fetchTeams, []);

  return (
    <>
      <TopBar title="Equipes" />
      <div className="list">
        <Status loading={loading} error={error} empty={teams.length === 0} />
        {
          teams.map((item) => (
            <Team
              key={item.id}
              id={item.id}
              name={item.name}
              city={item.city}
            />
          ))
        }
      </div>
    </>
  );
}

export default TeamsList;
