/* eslint-disable semi */
import Person from './IPerson';
export default interface IContext{
    state: any;
    setState: any;
    PersonDescription?: Person;
    setPersonDescription?: any;
}
