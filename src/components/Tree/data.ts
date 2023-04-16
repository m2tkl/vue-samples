import { v4 as uuidv4 } from 'uuid';

const createSampleData = (name: string) => {
  return {
    id: uuidv4(),
    name,
    opened: true,
    checked: false,
  };
};

export const sampleData = [
  {
    ...createSampleData('A'),
    children: [
      {
        ...createSampleData('A - A'),
        children: [
          {
            ...createSampleData('A - A - A'),
            children: [
              {
                ...createSampleData('A - A - A - A'),
                children: [
                  {
                    ...createSampleData('A - A - A - A - A'),
                    children: [],
                  },
                  {
                    ...createSampleData('A - A - A - A - B'),
                    children: [],
                  },
                ],
              },
              {
                ...createSampleData('A - A - A - B'),
                children: [],
              },
            ],
          },
          {
            ...createSampleData('A - A - B'),
            children: [],
          },
          {
            ...createSampleData('A - A - C'),
            children: [],
          },
        ],
      },
      {
        ...createSampleData('A - B'),
        children: [
          {
            ...createSampleData('A - B - A'),
            children: [],
          },
          {
            ...createSampleData('A - B - B'),
            children: [],
          },
          {
            ...createSampleData('A - B - C'),
            children: [],
          },
        ],
      },
      {
        ...createSampleData('A - C'),
        children: [],
      },
    ],
  },
  {
    ...createSampleData('B'),
    children: [
      {
        ...createSampleData('B - A'),
        children: [
          {
            ...createSampleData('B - A - A'),
            children: [
              {
                ...createSampleData('B - A - A - A'),
                children: [],
              },
              {
                ...createSampleData('B - A - A - B'),
                children: [],
              },
            ],
          },
          {
            ...createSampleData('B - A - B'),
            children: [
              {
                ...createSampleData('B - A - B - A'),
                children: [],
              },
              {
                ...createSampleData('B - A - B - B'),
                children: [],
              },
            ],
          },
        ],
      },
      {
        ...createSampleData('B - B'),
        children: [
          {
            ...createSampleData('B - B - A'),
            children: [],
          },
        ],
      },
      {
        ...createSampleData('B - C'),
        children: [],
      },
    ],
  },
];
