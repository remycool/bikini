import { International } from "./international";

export class Language {

    static getPkgLang(code: string): any {
        let pkgLang;
        switch (code) {
            case 'FR':
                pkgLang = new pkgLangFrench();
                break;
            case 'BE':
                pkgLang = new pkgLangFrench();
                break;
            case 'ES':
                pkgLang = new pkgLangSpanish();
                break;
            case 'JP':
                pkgLang = new pkgLangJapanese();
                break;
            default:
                pkgLang = new pkgLangEnglish();
                break;
        }
        return pkgLang;
    }
}

class pkgLangFrench implements International {
    bikeLbl = 'vélos';
    stationLbl = 'stations';
    countriesLbl = 'pays';
    addressLbl = 'adresse';
    distanceLbl = 'distance';
    availabilityLbl = 'disponibilité';
    errorCity = 'Oups...la ville est introuvable...';
    messageErrorCity = 'retour à la sélection de la ville';
    errorStation = 'Oups...la station est introuvable...';
    messageErrorStation = 'retour à la sélection de la station';
    citiesLbl = 'villes';
    countrySelectionLbl = 'Sélectionner votre pays';
    errorNavigation = 'Oups...! La page demandée n\'existe pas.';
}

class pkgLangEnglish implements International {
    bikeLbl = 'bikes';
    stationLbl = 'stations';
    countriesLbl = 'countries';
    addressLbl = 'address';
    distanceLbl = 'distance';
    availabilityLbl = 'availabilities';
    errorCity = 'Oups...city not found...';
    messageErrorCity = 'return to cities';
    errorStation = 'Oups...la station est introuvable...';
    messageErrorStation = 'return to stations';
    citiesLbl = 'cities';
    countrySelectionLbl = 'Select the country';
    errorNavigation = 'Oups...! that page doesn\'t exist.';
}

class pkgLangSpanish implements International {
    bikeLbl = 'bicicletas';
    stationLbl = 'estaciones';
    countriesLbl = 'país';
    addressLbl = 'dirección';
    distanceLbl = 'distancia';
    availabilityLbl = 'disponibilidad';
    errorCity = 'Oups...ciudad no encontrada...';
    messageErrorCity = 'regresar a las ciudades';
    errorStation = 'Oups...estación no encontrada...';
    messageErrorStation = 'regresar a las estaciones';
    citiesLbl = 'ciudades';
    countrySelectionLbl = 'seleccione el país';
    errorNavigation = 'Oups...! esa página no existe.';
}

class pkgLangJapanese implements International {
    bikeLbl = '自転車';
    stationLbl = '駅';
    countriesLbl = '国';
    addressLbl = '住所';
    distanceLbl = '距離';
    availabilityLbl = '可用性';
    errorCity = 'おっとっと...都市が見つかりません...';
    messageErrorCity = '都市に戻る';
    errorStation = 'おっとっと... 駅が見つかりません...';
    messageErrorStation = '駅に戻る';
    citiesLbl = '都市';
    countrySelectionLbl = '国を選択';
    errorNavigation = 'おっとっと... そのページは存在しません';
}


