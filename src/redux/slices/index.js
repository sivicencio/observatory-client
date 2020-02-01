import entities from './entities';
import projects from './projects';

const reducers = {};

const slices = [
  entities,
  projects,
];

slices.forEach((slice) => {
  reducers[slice.name] = slice.reducer;
});

export default reducers;
