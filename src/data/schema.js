/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import me from './queries/me';
import news from './queries/news';
// import findUser from './queries/findUser';
import createUser from './queries/createUser';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      // findUser,
      me,
      news,
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    description: "修改数据",
    fields: {
      createUser

    }
  }),
});

export default schema;
