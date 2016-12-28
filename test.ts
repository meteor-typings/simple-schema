
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

let schema1: SimpleSchema = new SimpleSchema({});

let schema2 = new SimpleSchema([schema1, new SimpleSchema({})]);

console.log(schema2.schema());
