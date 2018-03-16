let nextId = 0

export const addTeamMember = (text) => ({
  type: 'ADD_TEAM_MEMBER',
  id: nextId++,
  text
})
