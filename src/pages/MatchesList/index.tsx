import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import { Match, TopBar } from '../../components';
import api from '../../services/api';

import { IMatch } from '../../interfaces/match';
import { ITeam } from '../../interfaces/team';

function MatchesList() {
  const params = useParams();

  const [matches, setMatches] = useState<IMatch[]>([]);

  const fetchMatches = async () => {
    // busca tudo de uma vez em vez de uma requisição por time de cada partida
    const [allMatches, allTeams, competition] = await Promise.all([
      api.get(`/competitions/${params.id}/matches`),
      api.get('/teams'),
      api.get(`/competitions/${params.id}`),
    ]);
    const teamName = (id: string) => allTeams.data.find((team: ITeam) => team.id === id)?.name;
    const formatedMatches = allMatches.data.map((item: IMatch) => ({
      ...item,
      home: teamName(item.home),
      away: teamName(item.away),
      competition: competition.data.name,
    }));

    setMatches(formatedMatches);
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <>
      <TopBar title="Partidas" />
      <Stack spacing={2}>
        {
          matches.length > 0 && matches.map((item) => (
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
      </Stack>
    </>
  );
}

export default MatchesList;
