import React from 'react';
import { useParams } from 'react-router-dom';
import { Match, Status, TopBar } from '../../components';
import api from '../../services/api';
import useApi from '../../hooks/useApi';

import { IMatch } from '../../interfaces/match';
import { ITeam } from '../../interfaces/team';

function MatchesList() {
  const params = useParams();

  const fetchMatches = async () => {
    // busca tudo de uma vez em vez de uma requisição por time de cada partida
    const [allMatches, allTeams, competition] = await Promise.all([
      api.get(`/competitions/${params.id}/matches`),
      api.get('/teams'),
      api.get(`/competitions/${params.id}`),
    ]);
    const teamName = (id: string) => allTeams.data.find((team: ITeam) => team.id === id)?.name;
    const formatedMatches: IMatch[] = allMatches.data.map((item: IMatch) => ({
      ...item,
      home: teamName(item.home),
      away: teamName(item.away),
      competition: competition.data.name,
    }));

    return formatedMatches;
  };

  const { data: matches, loading, error } = useApi(fetchMatches, []);

  return (
    <>
      <TopBar title="Partidas" />
      <div className="list">
        <Status loading={loading} error={error} empty={matches.length === 0} />
        {
          matches.map((item) => (
            <Match
              key={item.id}
              id={item.id}
              date={item.date}
              home={item.home}
              away={item.away}
              competition={item.competition}
            />
          ))
        }
      </div>
    </>
  );
}

export default MatchesList;
