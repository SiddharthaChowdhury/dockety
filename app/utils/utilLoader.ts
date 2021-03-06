import * as PIXI from 'pixi.js'
import Loader = PIXI.loaders.Loader;
import {Observable, Observer} from "rxjs";

export const loader = new Loader();

class UtilLoader {
    constructor() {
        // if needed
        // loader._pixiMiddleware = [customManipulation, ...loader._pixiMiddleware];
    }

    public load =  <TLoader extends Loader, TContent extends {}> (content: TContent) => {
        for(let key in content) {
            loader.add(key, content[key]);
        }

        loader.load();

        return Observable.create((observer: Observer<TLoader>) => {
            loader.on("progress", (_loader: TLoader, resource: any) => {
                observer.next(resource);
            });

            loader.on("error", (error: any) => {
                observer.error(error);
                loader.reset();
            });

            loader.onComplete.add(() => observer.complete());
        })
    }
}

export const utilLoader = new UtilLoader();
