/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import UserType from '../types/UserType';
import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import {
  User
} from '../models';

const me = {
  type: UserType,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve({
    request
  }) {
    User.create({
        email: '1154135671@qq.com',
        emailConfirmed: true
      })
      .then(function (user1) {
        return {
          id: user1.get('id'),
          email:  user1.get('email'),
        };
      })

    // return request.user && {
    //   id: request.user.id,
    //   email: request.user.email,
    // };
  },
};

export default me;
