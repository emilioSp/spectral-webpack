import { isOpenApiv3, Spectral } from '@stoplight/spectral';

const spectral = new Spectral();
spectral.registerFormat('oas3', isOpenApiv3);