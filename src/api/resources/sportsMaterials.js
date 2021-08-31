import ApiService from '../api.service';

const SportsMaterials = {
  index: () => ApiService.get('/sports_materials'),
};

export default SportsMaterials;
