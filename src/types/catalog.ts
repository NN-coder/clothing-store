import { Products } from './products';

type Loading = { status: 'loading'; fetchResult: null };
type Failure = { status: 'failure'; fetchResult: Error };
type Success = { status: 'success'; fetchResult: Products };

export type Catalog = Loading | Failure | Success;
