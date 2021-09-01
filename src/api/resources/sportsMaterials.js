import ApiService from '../api.service';

const SportsMaterials = {
  index: (params) => ApiService.query('/sports_materials', params),
};

export default SportsMaterials;
