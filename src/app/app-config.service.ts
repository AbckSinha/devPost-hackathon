import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
    Headers,
    RequestOptions
} from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

    private config;
    private env;

    constructor(private http: HttpClient) { }

    /**
     * Loads the environment config file first. Reads the environment variable from the file
     * and based on that loads the appropriate configuration file - development or production
     */
    load() {
        return new Promise((resolve, reject) => {
            // tslint:disable-next-line: deprecation
            const headers = new Headers({
                Accept: 'application/json', 'Content-Type': 'application/json', DataType: 'application/json'
            });
            // tslint:disable-next-line: deprecation
            // const options = new RequestOptions({ headers });
            this.http.get('/config/env.json')
                .subscribe((envData: any) => {
                    this.env = envData;

                    this.http.get('/config/' + envData.env + '.json')
                        .subscribe((data) => {
                            this.config = data;
                            resolve(true);
                        },
                            (error: any) => {
                                return observableThrowError(error.json().error || 'Server error');
                            });
                });

        });
    }

    /*
     * Returns environment variable based on given key
     *
     * @param key
     */
    getEnv(key: any) {
        return this.env[key];
    }

    /*
     * Returns configuration value based on given key
     *
     * @param key
     */
    get(key: any) {
        this.config = {
            localization: {
                defaultLanguage: 'en',
                languages: [
                    { code: 'en', name: 'EN', culture: 'en-EN' },
                    { code: 'fr', name: 'FR', culture: 'fr-FR' }
                ]
            }
        };

        return this.config[key];
    }
}
