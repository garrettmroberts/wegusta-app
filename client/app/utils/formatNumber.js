const formatNumber = num => {
  const pr = new Intl.PluralRules('en-US', { type: 'ordinal' });

  const suffixes = new Map([
    ['one', 'st'],
    ['two', 'nd'],
    ['few', 'rd'],
    ['other', 'th']
  ]);

  const rule = pr.select(num);
  const suffix = suffixes.get(rule);
  return `${num}${suffix}`;
};

export default formatNumber;
