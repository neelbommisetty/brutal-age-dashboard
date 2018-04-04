export const RESOURCES = {
  columns: [
    {
      name: 'Denomination'
    },
    {
      name: 'Wood'
    },
    {
      name: 'Meat'
    },
    {
      name: 'Mana'
    },
    {
      name: 'Stone'
    },
    {
      name: 'Ivory'
    }
  ],
  denominations: [
    {
      name: '300',
      value: 300
    },
    {
      name: '1000',
      value: 1000
    },
    {
      name: '3k',
      value: 3000
    },
    {
      name: '10k',
      value: 10000
    },
    {
      name: '15k',
      value: 15000
    },
    {
      name: '30k',
      value: 30000
    },
    {
      name: '50k',
      value: 50000
    },
    {
      name: '150k',
      value: 150000
    },
    {
      name: '200k',
      value: 200000
    },
    {
      name: '500k',
      value: 500000
    },
    {
      name: '600K',
      value: 600000
    },
    {
      name: '1.5M',
      value: 1500000
    },
    {
      name: '2M',
      value: 2000000
    },
    {
      name: 'Warehouse',
      value: 1
    }
  ],
  values: {}
};

export const RESOURCE_DENOMINATIONS = {
  '300': { name: '300', value: 300 },
  '1000': { name: '1000', value: 1000 },
  '3k': { name: '3k', value: 3000 },
  '10k': { name: '10k', value: 10000 },
  '15k': { name: '15k', value: 15000 },
  '30k': { name: '30k', value: 30000 },
  '50k': { name: '50k', value: 50000 },
  '150k': { name: '150k', value: 150000 },
  '200k': { name: '200k', value: 200000 },
  '500k': { name: '500k', value: 500000 },
  '600K': { name: '600K', value: 600000 },
  '1.5M': { name: '1.5M', value: 1500000 },
  '2M': { name: '2M', value: 2000000 },
  Warehouse: { name: 'Warehouse', value: 1 }
};

export const SPEEDUPS = {
  columns: [
    {
      name: 'Denomination'
    },
    {
      name: 'Healing'
    },
    {
      name: 'Building'
    },
    {
      name: 'Training'
    },
    {
      name: 'Research'
    },
    {
      name: 'All'
    }
  ],
  denominations: [
    {
      name: '1 Minute',
      value: 1
    },
    {
      name: '15 Minutes',
      value: 15
    },
    {
      name: '1 Hour',
      value: 60
    },
    {
      name: '3 Hours',
      value: 180
    },
    {
      name: '8 Hours',
      value: 480
    },
    {
      name: '15 Hours',
      value: 900
    },
    {
      name: '1 Day',
      value: 1440
    }
  ],
  values: {}
};
export const SPEEDUP_DENOMINATIONS = {
  '1 Minute': {
    name: '1 Minute',
    value: 1
  },
  '15 Minutes': {
    name: '15 Minutes',
    value: 15
  },
  '1 Hour': {
    name: '1 Hour',
    value: 60
  },
  '3 Hours': {
    name: '3 Hours',
    value: 180
  },
  '8 Hours': {
    name: '8 Hours',
    value: 480
  },
  '15 Hours': {
    name: '15 Hours',
    value: 900
  },
  '1 Day': {
    name: '1 Day',
    value: 1440
  }
};
export const getDataFromLocalStorage = type => {
  let data = {};
  try {
    data = JSON.parse(localStorage.getItem(type));
  } catch (e) {
    data = {};
  }
  return data;
};

export const setDataToLocalStorage = (type, data) => {
  localStorage.setItem(type, JSON.stringify(data));
  return getDataFromLocalStorage(type);
};
