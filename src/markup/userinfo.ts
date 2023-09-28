type User = {
  name: string;
  score: number;
  interestAreas: string[];
  location: string;
  sources: {
    github: {
      userName: string;
    };
    twitter: {
      userName: string;
    };
  };
};

export const userInfo = (data: User) => {
  return `
**user info for ${data?.name}**
**user_score**: ${data?.score}
**interest**: ${data?.interestAreas?.join(", ")}
**location**: ${data?.location}
**github**: ${data.sources?.github?.userName} [github](https://github.com/${
    data.sources?.github?.userName
  })
**twitter**: ${data.sources?.twitter?.userName} [twitter](https://twitter.com/${
    data.sources?.twitter?.userName
  })
`;
};
