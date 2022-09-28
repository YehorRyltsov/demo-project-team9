import { http } from "common/http";
import { URL_HOSPITAL_WARD, URL_BEDS, URL_BASE } from "common/constants";
import { Option, Bed } from "common/models";
import { getAllData } from "common/utils";

export interface IPlacementManager {
    getHospitalWard: (id: number) => Promise<any>;
    getBed: (id: number) => Promise<any>;
    getBedProfiles: () => Promise<any>;
}

export class PlacementManager implements IPlacementManager {
    private static _instance: IPlacementManager;

    static getInstance(): IPlacementManager {
        if (!PlacementManager._instance) {
            PlacementManager._instance = new PlacementManager();
        }

        return PlacementManager._instance;
    }

    getHospitalWard = async (value: number) => {
        try {
            const { data } = await http.get(
                `${URL_HOSPITAL_WARD}?division=${value}`
            );

            return this.getPlacementInstance(data);
        } catch (e) {
            console.error("Error in get hospital wards request", e);
        }
    };

    getBed = async (value: number) => {
        try {
            const { data } = await http.get(
                `${URL_BEDS}?hospital_ward=${value}`
            );

            return this.getBedInstance(data);
        } catch (e) {
            console.error(`Error in get bed request`, e);
        }
    };

    getBedProfiles = async () => {
        try {
            const data = await getAllData(`${URL_BASE}/bed-profile`);

            return this.getBedProfileInstance(data);
        } catch (e) {
            console.error("Error in get bed profile request", e);
        }
    };

    private getPlacementInstance = (data: any) => {
        return data.results.map(item => new Option(item));
    };

    private getBedInstance = (data: any) => {
        return data.results.map(item => new Bed(item));
    };

    private getBedProfileInstance = data => {
        return data.map(profile => new Option(profile));
    };
}
