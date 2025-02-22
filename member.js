function skillsMember(
  { id, name, age, skills = [] },
  { id: memberId, name: memberName }
) {
  return {
    id,
    name,
    age,
    skills: skills.map(skill => skill.name),
    member: {
      id: memberId,
      name: memberName
    }
  };
}