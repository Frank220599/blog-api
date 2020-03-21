define({ "api": [
  {
    "type": "post",
    "url": "/account/change-password",
    "title": "Change Password",
    "name": "Change_Password",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Confirmation password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"errors\": {\n       \"email\": \"UserNotFound\"\n   }\n}",
          "type": "json"
        },
        {
          "title": "122:",
          "content": "HTTP/1.1 12 12\n{\n   \"errors\": {\n       \"email\": \"UserNotFound\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/forgot-password",
    "title": "Forgot Password",
    "name": "Forgot_Password",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>email.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Success message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Confirmation sent to example@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"errors\": {\n       \"email\": \"UserNotFound\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/reset-password",
    "title": "Reset Password",
    "name": "Reset_Password",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Confirmation password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"errors\": {\n       \"email\": \"UserNotFound\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "token",
            "description": "<p>access token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1yLmZyYW5rMjIwNTk5QGdtYWlsLmNvbSIsInVzZXJJZCI6MSwiaWF0IjoxNTgyNzg5ODk1LCJleHAiOjE1ODI3OTM0OTV9.O5AcMJKTopJJrVx3jTJSTApqeYjlrbnGNsoc0flANk4\",\n  \"user\": {\n      \"id\": 1,\n      \"email\": \"mr.frank220599@gmail.com\",\n      \"firstName\": \"farrux\",\n      \"lastName\": \"zokirov\",\n      \"role\": 0,\n      \"status\": \"0\",\n      \"birthtime\": null,\n      \"phone\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The email of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/auth/signup",
    "title": "Signup",
    "name": "Sign_up",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>Users email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthtime",
            "description": "<p>User birth time.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>User phone number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>status of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Updated time of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created time of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 OK\n  {\n    \"user\": {\n        \"id\": 1,\n        \"email\": \"mr.frank220599@gmail.com\",\n        \"firstName\": \"farrux\",\n        \"lastName\": \"zokirov\",\n        \"status\": 0,\n        \"role\": 0,\n        \"updatedAt\": \"2020-02-27T07:32:04.074Z\",\n        \"createdAt\": \"2020-02-27T07:32:04.074Z\"\n    },\n    \"msg\": \"Your email and password send to your email address!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailExist",
            "description": "<p>E-mail already in use.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 422 Not Found\n{\n  \"errors\": {\n      \"email\": \"E-mail already in use\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/category",
    "title": "Get Categories",
    "name": "Get_Categories",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "categories",
            "description": "<p>Collection of Categories.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"categories\":\n      [{\n          \"id\": 6,\n          \"parentId\": null,\n          \"title\": \"avto\",\n          \"slug\": \"avto\",\n          \"status\": \"0\",\n          \"createdAt\": \"2020-03-04T05:34:50.000Z\",\n          \"updatedAt\": \"2020-03-04T05:34:50.000Z\",\n          \"deletedAt\": null\n       }, { ... }],\n  \"msg\": \"Categories fetched successfully!\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/:id",
    "title": "Get Category",
    "name": "Get_Category",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Obje",
            "optional": false,
            "field": "id",
            "description": "<p>id of Categories.</p>"
          },
          {
            "group": "Success 200",
            "type": "Obje",
            "optional": false,
            "field": "parentId",
            "description": "<p>parent id of Categories.</p>"
          },
          {
            "group": "Success 200",
            "type": "Obje",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Categories.</p>"
          },
          {
            "group": "Success 200",
            "type": "Obje",
            "optional": false,
            "field": "slug",
            "description": "<p>slug of Categories.</p>"
          },
          {
            "group": "Success 200",
            "type": "Obje",
            "optional": false,
            "field": "status",
            "description": "<p>Status of Categories.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Updated time of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Created time of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"category\": {\n      \"id\": 6,\n      \"parentId\": null,\n      \"title\": \"avto\",\n      \"slug\": \"avto\",\n      \"status\": \"0\",\n      \"createdAt\": \"2020-03-04T05:34:50.000Z\",\n      \"updatedAt\": \"2020-03-04T05:34:50.000Z\",\n      \"deletedAt\": null\n   },\n  \"msg\": \"Category fetched successfully!\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/comment",
    "title": "Add Comment",
    "name": "Add_Comment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Comment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Updated Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"category\": {\n      \"id\": 6,\n      \"parentId\": null,\n      \"title\": \"avto1\",\n      \"slug\": \"avto1\",\n      \"status\": 0,\n      \"updatedAt\": \"2020-03-04T05:34:50.098Z\",\n      \"createdAt\": \"2020-03-04T05:34:50.098Z\"\n  },\n  \"msg\": \"Comment added successfully!\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "delete",
    "url": "/comment/:id",
    "title": "Delete Comment",
    "name": "Delete_Comment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Comment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the deleted Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"commentId\": 24,\n    \"msg\": 'Comment deleted successfully'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the File was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The comment not belong to current user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommentNotFound:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Comment not found!\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"You have not permission delete this Comment!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comment",
    "title": "Get Comment",
    "name": "Get_Comment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Comment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Updated Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"category\": {\n      \"id\": 6,\n      \"parentId\": null,\n      \"title\": \"avto1\",\n      \"slug\": \"avto1\",\n      \"status\": 0,\n      \"updatedAt\": \"2020-03-04T05:34:50.098Z\",\n      \"createdAt\": \"2020-03-04T05:34:50.098Z\"\n  },\n  \"msg\": \"Comment added successfully!\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comment",
    "title": "Get Comments",
    "name": "Get_Comments",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Comment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Updated Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"category\": {\n      \"id\": 6,\n      \"parentId\": null,\n      \"title\": \"avto1\",\n      \"slug\": \"avto1\",\n      \"status\": 0,\n      \"updatedAt\": \"2020-03-04T05:34:50.098Z\",\n      \"createdAt\": \"2020-03-04T05:34:50.098Z\"\n  },\n  \"msg\": \"Comment added successfully!\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "put",
    "url": "/comment/:id",
    "title": "Update Comment",
    "name": "Update_Comment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Comment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Updated Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"commentId\": 24,\n    \"msg\": 'Comment deleted successfully'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the Comment was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The comment not belong to current user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommentNotFound:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Comment not found!\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"You have not permission delete this Comment!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "delete",
    "url": "/file/:id",
    "title": "Delete File",
    "name": "Delete_File",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the file.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the deleted file.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"fileId\": 24,\n    \"msg\": 'File deleted successfully'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FileNotFound",
            "description": "<p>The id of the File was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The file not belong to current user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "FileNotFound:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"File not found!\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"You have not permission delete this file!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/file.js",
    "groupTitle": "File"
  },
  {
    "type": "delete",
    "url": "/file/:id",
    "title": "Update File",
    "name": "Update_File",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Binary",
            "optional": false,
            "field": "file",
            "description": "<p>new File .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fieldname",
            "description": "<p>fieldname of the File.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "originalname",
            "description": "<p>Original name of the File.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the File.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>destination of the File.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>filename of the File.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>path of the File.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"fieldname\": 'file',\n    \"originalname\": 'slider.png',\n    \"type\": 'image/png',\n    \"filename\": 'k7bgwcng.png',\n    \"path\": 'uploads\\k7bgwcng.png',\n    \"size\": 83848\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FileNotFound",
            "description": "<p>The id of the File was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The post not belong to current user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "FileNotFound:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"File not found!\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"You have not permission update this file!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/file.js",
    "groupTitle": "File"
  },
  {
    "type": "delete",
    "url": "/file",
    "title": "Upload File",
    "name": "Upload_Files",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Binary",
            "optional": false,
            "field": "file",
            "description": "<p>new File .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fieldname",
            "description": "<p>fieldname of the File.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "originalname",
            "description": "<p>Original name of the File.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the File.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>destination of the File.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>filename of the File.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>path of the File.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"fieldname\": 'file',\n    'originalname': 'slider.png',\n    \"type\": 'image/png',\n    \"filename\": 'k7bgwcng.png',\n    \"path\": 'uploads\\k7bgwcng.png',\n    \"size\": 83848\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The post not belong to current user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "FileNotFound:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"File not found!\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"You have not permission delete this file!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/file.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/post",
    "title": "Create Post",
    "name": "Create_post",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contentRaw",
            "description": "<p>contentRaw of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contentHTML",
            "description": "<p>contentHTML of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "categoryId",
            "description": "<p>categoryId of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "fileId",
            "description": "<p>fileId of the post.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>slug of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentRaw",
            "description": "<p>contentRaw of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentHTML",
            "description": "<p>contentHTML of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>status of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "categoryId",
            "description": "<p>categoryId of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "fileId",
            "description": "<p>fileId of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Updated time of the Post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created time of the Post.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"post\": {\n      \"id\": 3,\n      \"title\": \"An interisting post\",\n      \"slug\": \"An-interisting-post\",\n      \"contentRaw\": \"this is interesting post\",\n      \"contentHTML\": \"<h1>The Post</h1>\",\n      \"status\": 0,\n      \"categoryId\": 1,\n      \"fileId\": null\n      \"userId\": 1,\n      \"updatedAt\": \"2020-02-29T08:33:18.812Z\",\n      \"createdAt\": \"2020-02-29T08:33:18.812Z\"\n  },\n  \"msg\": \"Post created successfully!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/post.js",
    "groupTitle": "Post"
  },
  {
    "type": "delete",
    "url": "/post/:id",
    "title": "Delete Post",
    "name": "Delete_Post",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Post deleted successfully!.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"postId\": 9,\n  \"msg\": \"Post deleted successfully!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>The id of the Post was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The post not belong to current user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "PostNotFound:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Post not found!\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"You have not permission to delete this post!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/post.js",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get Post",
    "name": "Get_Post",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>slug of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentRaw",
            "description": "<p>contentRaw of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentHTML",
            "description": "<p>contentHTML of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>status of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "categoryId",
            "description": "<p>categoryId of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "fileId",
            "description": "<p>fileId of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>if fileId is not null file be included in the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>updatedAt of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>createdAt of the post.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"post\": {\n      \"id\": 3,\n      \"title\": \"An interisting post\",\n      \"slug\": \"An-interisting-post\",\n      \"contentRaw\": \"this is interesting post\",\n      \"contentHTML\": \"<h1>The Post</h1>\",\n      \"status\": 0,\n      \"categoryId\": 1,\n      \"fileId\": 1,\n      \"file\": {\n         \"id\": 1,\n         \"fileName\": \"k7bgwcng.png\",\n         \"originalName\": \"slider.png\",\n         \"type\": \"image/png\",\n         \"path\": \"uploads\\\\k7bgwcng.png\",\n         \"size\": 83848,\n         \"createdAt\": \"2020-03-03T05:44:29.000Z\",\n         \"updatedAt\": \"2020-03-03T05:44:29.000Z\",\n         \"deletedAt\": null\n      },\n      \"userId\": 1,\n      \"updatedAt\": \"2020-02-29T08:33:18.812Z\",\n      \"createdAt\": \"2020-02-29T08:33:18.812Z\"\n  },\n  \"msg\": \"Post fetched successfully!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>The id of the Post was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "PostNotFound:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Post not found!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/post.js",
    "groupTitle": "Post"
  },
  {
    "type": "post",
    "url": "/post",
    "title": "Get Posts",
    "name": "Get_posts",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "posts",
            "description": "<p>Collection of Posts.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"posts\": [{\n      \"id\": 3,\n      \"title\": \"An interisting post\",\n      \"slug\": \"An-interisting-post\",\n      \"contentRaw\": \"this is interesting post\",\n      \"contentHTML\": \"<h1>The Post</h1>\",\n      \"status\": 0,\n      \"categoryId\": 1,\n      \"fileId\": null,\n      \"userId\": 1,\n      \"updatedAt\": \"2020-02-29T08:33:18.812Z\",\n      \"createdAt\": \"2020-02-29T08:33:18.812Z\"\n  }, { ... }],\n  \"msg\": \"Posts created successfully!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/post.js",
    "groupTitle": "Post"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Update Post",
    "name": "Update_Post",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contentRaw",
            "description": "<p>contentRaw of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contentHTML",
            "description": "<p>contentHTML of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>status of the post..</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "categoryId",
            "description": "<p>categoryId of the post..</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "fileId",
            "description": "<p>fileId of the post..</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>slug of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentRaw",
            "description": "<p>contentRaw of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentHTML",
            "description": "<p>contentHTML of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>status of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "categoryId",
            "description": "<p>categoryId of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "fileId",
            "description": "<p>fileId of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>updatedAt of the post.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>createdAt of the post.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>The id of the Post was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The post not belong to current user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "PostNotFound:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Post not found!\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"You have not permission to update this post!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/post.js",
    "groupTitle": "Post"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Delete User",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"userId\" = 1,\n  \"msg\" = \"User deleted successfully!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get user",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role",
            "description": "<p>role of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>status of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthtime",
            "description": "<p>birthtime of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nuser: {\n    \"id\": 1,\n    \"email\": \"mr.frank225099@gmail.com\",\n    \"firstName\": \"farrux\",\n    \"lastName\": \"zokirov\",\n    \"role\": 0,\n    \"status\": 0,\n    \"birthtime\": null,\n    \"phone\": null,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Update User",
    "name": "UpdateUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role",
            "description": "<p>role of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>status of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthtime",
            "description": "<p>birthtime of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nuser: {\n    \"id\": 1,\n    \"email\": \"mr.frank225099@gmail.com\",\n    \"firstName\": \"farrux\",\n    \"lastName\": \"zokirov\",\n    \"role\": 0,\n    \"status\": 0,\n    \"birthtime\": null,\n    \"phone\": null,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/routes/user.js",
    "groupTitle": "User"
  }
] });
