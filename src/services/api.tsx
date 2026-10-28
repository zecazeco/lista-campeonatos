import { competitions, teams, matches } from './data';

// backend fake: simula as rotas da antiga API com os dados locais
function getCompetitionMatches(id: number) {
  return matches.filter((match) => match.competition === id);
}

function getCompetitionTeams(id: number) {
  const teamIds = getCompetitionMatches(id).flatMap((match) => [match.home, match.away]);
  return teams.filter((team) => teamIds.includes(team.id));
}

function resolve(url: string) {
  const [resource, id, sub] = url.split('/').filter(Boolean);
  const numId = Number(id);

  if (resource === 'competitions') {
    if (id === undefined) return competitions;
    if (sub === 'matches') return getCompetitionMatches(numId);
    if (sub === 'teams') return getCompetitionTeams(numId);
    return competitions.find((competition) => competition.id === numId);
  }

  if (resource === 'teams') {
    if (id === undefined) return teams;
    return teams.find((team) => team.id === numId);
  }

  return undefined;
}

const api = {
  get(url: string) {
    return new Promise<{ data: any }>((res, rej) => {
      // pequeno atraso pra parecer uma requisição de verdade
      setTimeout(() => {
        const data = resolve(url);
        if (data === undefined) {
          rej(new Error(`Não encontrado: ${url}`));
        } else {
          res({ data });
        }
      }, 300);
    });
  },
};

export default api;
