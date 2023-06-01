let interview_data_raw = `[
    {
        "InterviewId": "8bb9fa20-9a42-4c80-a66e-93b5ccf07ddd",
        "InterviewEndDate": "2023-05-27 08:14:56",
        "InterviewState": "Completed",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 999,
        "download_time": "01-06-2023 18:09:21"
    },
    {
        "InterviewId": "f58b0c3c-3ed2-447c-8e78-11f65b1845dd",
        "InterviewEndDate": "2023-05-27 08:15:26",
        "InterviewState": "Completed",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 999
    },
    {
        "InterviewId": "61468726-6119-4479-86af-3df5cf97432d",
        "InterviewEndDate": "2023-05-27 08:17:56",
        "InterviewState": "Completed",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 999
    },
    {
        "InterviewId": "0e98d527-5340-44bb-ac2a-2fe4e8da1839",
        "InterviewEndDate": "2023-05-30 07:24:23",
        "InterviewState": "Completed",
        "Dest": "AAL",
        "AirlineCode": "SK",
        "InterviewerID": 7
    },
    {
        "InterviewId": "bf6f18f5-d86e-4ee8-bb70-d7db2be963e7",
        "InterviewEndDate": "2023-05-28 13:59:59",
        "InterviewState": "Completed",
        "Dest": "RNN",
        "AirlineCode": "DX",
        "InterviewerID": 999
    },
    {
        "InterviewId": "9389c8e2-9fd5-4f00-8ec5-e7240fc7c3eb",
        "InterviewEndDate": "2023-05-30 06:33:34",
        "InterviewState": "Completed",
        "Dest": "AAL",
        "AirlineCode": "SK",
        "InterviewerID": 7
    },
    {
        "InterviewId": "e4c33118-2a80-4d91-bc91-3d7887676a25",
        "InterviewEndDate": "2023-05-30 07:25:48",
        "InterviewState": "Completed",
        "Dest": "SGD",
        "AirlineCode": "6I",
        "InterviewerID": 7
    },
    {
        "InterviewId": "753b65ea-b910-4a9f-83e9-5d69acd0bb7c",
        "InterviewEndDate": "2023-06-01 12:21:01",
        "InterviewState": "Completed",
        "Dest": "ARN",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "2f57749f-1029-40af-bed3-f58264ce383a",
        "InterviewEndDate": "2023-06-01 12:03:06",
        "InterviewState": "Completed",
        "Dest": "FCO",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "0908359f-7680-488b-aebd-616d0af547f8",
        "InterviewEndDate": "2023-06-01 12:06:44",
        "InterviewState": "Completed",
        "Dest": "FCO",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "09df2f17-a295-4eca-b922-936cc7446dd7",
        "InterviewEndDate": "2023-06-01 12:07:28",
        "InterviewState": "Completed",
        "Dest": "FCO",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "4efc04c9-4b84-41f2-889b-b16381aba0d4",
        "InterviewEndDate": "2023-06-01 12:11:42",
        "InterviewState": "Completed",
        "Dest": "FCO",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "5dd23e94-edd4-4d4a-b51b-c8cd634ad09a",
        "InterviewEndDate": "2023-06-01 12:15:01",
        "InterviewState": "Completed",
        "Dest": "FCO",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "ecea42e9-1e01-482c-bb7b-a659b392ca2b",
        "InterviewEndDate": "2023-06-01 12:12:09",
        "InterviewState": "Completed",
        "Dest": "FCO",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "53480907-2853-432a-ab64-bd6c64330097",
        "InterviewEndDate": "2023-06-01 12:29:53",
        "InterviewState": "Completed",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 2
    },
    {
        "InterviewId": "e97f72d0-dcd2-41e2-a28b-d4179ea8b178",
        "InterviewEndDate": "2023-06-01 12:26:20",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "SK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "29be744f-1341-4cb9-8826-1c268e1f20ef",
        "InterviewEndDate": "2023-06-01 12:23:41",
        "InterviewState": "Completed",
        "Dest": "ARN",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "b9edc422-6ec0-4b7e-9ee1-2d2715be74e2",
        "InterviewEndDate": "2023-06-01 12:28:10",
        "InterviewState": "Completed",
        "Dest": "ARN",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "93c626e0-2ed6-40ab-866f-ab8fc0c06fcd",
        "InterviewEndDate": "2023-06-01 12:31:58",
        "InterviewState": "Completed",
        "Dest": "ARN",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "b70ed531-a3bb-4510-b2c1-811ce17161eb",
        "InterviewEndDate": "2023-06-01 12:33:27",
        "InterviewState": "Completed",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 2
    },
    {
        "InterviewId": "4ae9f4fa-88d0-4df7-9989-7b13c7cf1b99",
        "InterviewEndDate": "2023-06-01 12:32:22",
        "InterviewState": "Completed",
        "Dest": "ARN",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "6b78eebe-a5a2-44ee-a3de-78a578541f18",
        "InterviewEndDate": "2023-06-01 12:30:59",
        "InterviewState": "Completed",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 2
    },
    {
        "InterviewId": "9457a441-941d-4288-b1be-3256f280ec30",
        "InterviewEndDate": "2023-06-01 12:29:39",
        "InterviewState": "Completed",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 2
    },
    {
        "InterviewId": "55db503d-286a-49cc-bbbc-a70caae1a46b",
        "InterviewEndDate": "2023-06-01 12:31:38",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "SK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7c295d71-9010-4846-9617-003c1537e57a",
        "InterviewEndDate": "2023-06-01 12:32:06",
        "InterviewState": "Completed",
        "Dest": "ARN",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "dc092d50-2c78-45cd-90c6-b950f37f6192",
        "InterviewEndDate": "2023-06-01 12:41:12",
        "InterviewState": "Completed",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 2
    },
    {
        "InterviewId": "f00bb018-acf8-45c2-9d5f-f96427bea9c0",
        "InterviewEndDate": "2023-06-01 12:33:27",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "SK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c650266e-d709-45a9-948d-6ee9fee8ff6a",
        "InterviewEndDate": "2023-06-01 12:38:35",
        "InterviewState": "Completed",
        "Dest": "ARN",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "7d6543bb-5800-491c-980d-8727c1196048",
        "InterviewEndDate": "2023-06-01 12:39:06",
        "InterviewState": "Completed",
        "Dest": "ARN",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "ec0f29c5-578a-4268-8be4-8c83b8f5e04f",
        "InterviewEndDate": "2023-06-01 13:03:08",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "ffc7c7be-0465-481e-9938-8d23031001b9",
        "InterviewEndDate": "2023-06-01 14:18:03",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "0799612e-aa5f-459b-80cf-2fb96ed506d4",
        "InterviewEndDate": "2023-06-01 12:41:29",
        "InterviewState": "Completed",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 2
    },
    {
        "InterviewId": "b375e188-6ff5-4799-b3ce-3828fcbbe319",
        "InterviewEndDate": "2023-06-01 12:41:43",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "SK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b30f56e9-d145-4e16-8cd4-c1c74accc743",
        "InterviewEndDate": "2023-06-01 12:39:13",
        "InterviewState": "Completed",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 2
    },
    {
        "InterviewId": "72d8b62d-4acd-4d73-bc49-5a0587325530",
        "InterviewEndDate": "2023-06-01 12:42:44",
        "InterviewState": "Completed",
        "Dest": "ARN",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "d49896d9-fb9a-410b-bc43-e50ed752c2e2",
        "InterviewEndDate": "2023-06-01 12:58:50",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "7f238d83-957d-48f5-b349-46dafabdd31b",
        "InterviewEndDate": "2023-06-01 12:56:33",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "e3d0ccb4-459d-458a-934c-bbe23363aa37",
        "InterviewEndDate": "2023-06-01 12:55:55",
        "InterviewState": "Completed",
        "Dest": "IAD",
        "AirlineCode": "SK",
        "InterviewerID": 3
    },
    {
        "InterviewId": "6ca7c325-fbb3-4a0e-b592-42e7d6f38efc",
        "InterviewEndDate": "2023-06-01 13:01:32",
        "InterviewState": "Completed",
        "Dest": "IAD",
        "AirlineCode": "SK",
        "InterviewerID": 3
    },
    {
        "InterviewId": "a5201e60-2e08-46f3-ae34-ed56097bce62",
        "InterviewEndDate": "2023-06-01 13:07:48",
        "InterviewState": "Completed",
        "Dest": "IAD",
        "AirlineCode": "SK",
        "InterviewerID": 3
    },
    {
        "InterviewId": "eec891a6-948b-4657-ace5-20647e672008",
        "InterviewEndDate": "2023-06-01 13:03:46",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "dbe30bab-9595-4054-a9c4-d35c15444b10",
        "InterviewEndDate": "2023-06-01 13:03:00",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "bcaccbc6-6ee4-4a86-b3ae-246c4045377b",
        "InterviewEndDate": "2023-06-01 13:04:51",
        "InterviewState": "Completed",
        "Dest": "IAD",
        "AirlineCode": "SK",
        "InterviewerID": 3
    },
    {
        "InterviewId": "806939a8-81c3-4759-8a47-34d238551923",
        "InterviewEndDate": "2023-06-01 13:08:45",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "d05bdcf3-f4d2-4756-995d-867eac5093fe",
        "InterviewEndDate": "2023-06-01 13:13:38",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "32af34a7-a679-4287-9d5d-29771f1a3ac1",
        "InterviewEndDate": "2023-06-01 14:20:43",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "c8269d32-f729-4841-8f47-125ce7017cb6",
        "InterviewEndDate": "2023-06-01 13:11:18",
        "InterviewState": "Completed",
        "Dest": "IAD",
        "AirlineCode": "SK",
        "InterviewerID": 3
    },
    {
        "InterviewId": "25510707-2ec3-4acf-896e-bc1ce1138bd5",
        "InterviewEndDate": "2023-06-01 13:11:14",
        "InterviewState": "Completed",
        "Dest": "IAD",
        "AirlineCode": "SK",
        "InterviewerID": 3
    },
    {
        "InterviewId": "d705f865-95f9-44bc-9c19-52d9e4b6d752",
        "InterviewEndDate": "2023-06-01 14:16:32",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "b8026314-ebc8-4732-9289-b722e0d63c2d",
        "InterviewEndDate": "2023-06-01 13:17:33",
        "InterviewState": "Completed",
        "Dest": "IAD",
        "AirlineCode": "SK",
        "InterviewerID": 3
    },
    {
        "InterviewId": "79f4fa43-868e-4457-adf0-5a6eb5a8ae43",
        "InterviewEndDate": "2023-06-01 13:14:51",
        "InterviewState": "Completed",
        "Dest": "IAD",
        "AirlineCode": "SK",
        "InterviewerID": 5
    },
    {
        "InterviewId": "99357516-22cc-49bb-abee-6095985344f5",
        "InterviewEndDate": "2023-06-01 13:16:21",
        "InterviewState": "Completed",
        "Dest": "IAD",
        "AirlineCode": "SK",
        "InterviewerID": 3
    },
    {
        "InterviewId": "673c2603-c5f3-4f03-8b50-9b35afa8da84",
        "InterviewEndDate": "2023-06-01 14:26:15",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "ae4f0ff2-47d7-4218-bf36-f620289578fd",
        "InterviewEndDate": "2023-06-01 13:17:54",
        "InterviewState": "Completed",
        "Dest": "IAD",
        "AirlineCode": "SK",
        "InterviewerID": 3
    },
    {
        "InterviewId": "31575b40-ed7f-47ca-b7b2-291049d30ad1",
        "InterviewEndDate": "2023-06-01 13:20:13",
        "InterviewState": "Completed",
        "Dest": "IAD",
        "AirlineCode": "SK",
        "InterviewerID": 3
    },
    {
        "InterviewId": "126ac599-282f-4ca0-bfab-9878341c9278",
        "InterviewEndDate": "2023-06-01 13:24:55",
        "InterviewState": "Completed",
        "Dest": "IAD",
        "AirlineCode": "SK",
        "InterviewerID": 3
    },
    {
        "InterviewId": "ed1ce084-8828-48bd-b6e2-227fcbcb7275",
        "InterviewEndDate": "2023-06-01 13:23:47",
        "InterviewState": "Completed",
        "Dest": "IAD",
        "AirlineCode": "SK",
        "InterviewerID": 4
    },
    {
        "InterviewId": "22eab7ac-d08f-4955-8eab-92bedf2ae510",
        "InterviewEndDate": "2023-06-01 13:42:07",
        "InterviewState": "Completed",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ed1e2aea-8c50-412b-be97-b75efe0aa4a5",
        "InterviewEndDate": "2023-06-01 13:45:37",
        "InterviewState": "Completed",
        "Dest": "JFK",
        "AirlineCode": "DL",
        "InterviewerID": 3
    },
    {
        "InterviewId": "37bb30bd-310d-47f5-aa86-42430409d330",
        "InterviewEndDate": "2023-06-01 13:41:36",
        "InterviewState": "Completed",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "28e0f3ab-2567-400f-914b-02e5eb3ff7f1",
        "InterviewEndDate": "2023-06-01 13:41:47",
        "InterviewState": "Completed",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3fc09ab7-4b3f-49b7-9802-90085d83f0ce",
        "InterviewEndDate": "2023-06-01 14:26:14",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "D8",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0e935e02-e5e8-46f3-8f18-cb4eac3f62ac",
        "InterviewEndDate": "2023-06-01 13:47:24",
        "InterviewState": "Completed",
        "Dest": "JFK",
        "AirlineCode": "DL",
        "InterviewerID": 3
    },
    {
        "InterviewId": "e8826d98-ac70-4f1c-880a-5422bc0c327f",
        "InterviewEndDate": "2023-06-01 13:49:25",
        "InterviewState": "Completed",
        "Dest": "JFK",
        "AirlineCode": "DL",
        "InterviewerID": 3
    },
    {
        "InterviewId": "ae1ae581-0792-4a17-9899-a6142668a636",
        "InterviewEndDate": "2023-06-01 13:47:47",
        "InterviewState": "Completed",
        "Dest": "JFK",
        "AirlineCode": "DL",
        "InterviewerID": 3
    },
    {
        "InterviewId": "a5d8bb53-5110-4bf2-a120-23a7bc4fd5cc",
        "InterviewEndDate": "2023-06-01 13:54:13",
        "InterviewState": "Completed",
        "Dest": "JFK",
        "AirlineCode": "DL",
        "InterviewerID": 3
    },
    {
        "InterviewId": "dad07919-51ac-42c8-9b90-a2915e3f2e1f",
        "InterviewEndDate": "2023-06-01 13:50:37",
        "InterviewState": "Completed",
        "Dest": "JFK",
        "AirlineCode": "DL",
        "InterviewerID": 3
    },
    {
        "InterviewId": "a03e7c2d-d3c9-4a13-bb93-78164174b288",
        "InterviewEndDate": "2023-06-01 14:30:29",
        "InterviewState": "Completed",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 2
    },
    {
        "InterviewId": "56b4cb9b-1f5c-4a0c-8e81-eb82098d5ff4",
        "InterviewEndDate": "2023-06-01 13:53:14",
        "InterviewState": "Completed",
        "Dest": "JFK",
        "AirlineCode": "DL",
        "InterviewerID": 3
    },
    {
        "InterviewId": "5d869deb-63db-46ba-917e-350338e1730c",
        "InterviewEndDate": "2023-06-01 13:59:25",
        "InterviewState": "Completed",
        "Dest": "JFK",
        "AirlineCode": "DL",
        "InterviewerID": 3
    },
    {
        "InterviewId": "4206ef48-a88e-459d-b724-012ad8214d86",
        "InterviewEndDate": "2023-06-01 13:56:56",
        "InterviewState": "Completed",
        "Dest": "JFK",
        "AirlineCode": "DL",
        "InterviewerID": 3
    },
    {
        "InterviewId": "b1e6c63b-b013-4086-bc9a-889683450b23",
        "InterviewEndDate": "2023-06-01 13:58:17",
        "InterviewState": "Completed",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 2
    },
    {
        "InterviewId": "abc6327a-0ee5-492f-83f7-a11ba2a863c1",
        "InterviewEndDate": "2023-06-01 13:57:46",
        "InterviewState": "Completed",
        "Dest": "JFK",
        "AirlineCode": "DL",
        "InterviewerID": 3
    },
    {
        "InterviewId": "edd27569-8111-4c50-923f-02eac668c2c5",
        "InterviewEndDate": "2023-06-01 14:12:41",
        "InterviewState": "Completed",
        "Dest": "BKK",
        "AirlineCode": "TG",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4ec25b47-9f67-4aaa-859a-5643a93e6593",
        "InterviewEndDate": "2023-06-01 14:01:16",
        "InterviewState": "Completed",
        "Dest": "JFK",
        "AirlineCode": "DL",
        "InterviewerID": 3
    },
    {
        "InterviewId": "d485e9b3-56ce-42bd-825f-ac16c06f1a45",
        "InterviewEndDate": "2023-06-01 14:03:11",
        "InterviewState": "Completed",
        "Dest": "JFK",
        "AirlineCode": "DL",
        "InterviewerID": 3
    },
    {
        "InterviewId": "74130760-44d4-4acc-a353-fddf4e50dfea",
        "InterviewEndDate": "2023-06-01 14:14:41",
        "InterviewState": "Completed",
        "Dest": "BKK",
        "AirlineCode": "TG",
        "InterviewerID": 3
    },
    {
        "InterviewId": "989261b0-2646-489b-9c28-b347bd4351ea",
        "InterviewEndDate": "2023-06-01 14:17:37",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "D8",
        "InterviewerID": 1
    },
    {
        "InterviewId": "07247128-2edb-45db-873e-f9bae8970e9e",
        "InterviewEndDate": "2023-06-01 14:18:19",
        "InterviewState": "Completed",
        "Dest": "BKK",
        "AirlineCode": "TG",
        "InterviewerID": 3
    },
    {
        "InterviewId": "3e9fa875-9eab-4f88-8706-ee90b1a60a71",
        "InterviewEndDate": "2023-06-01 14:22:35",
        "InterviewState": "Completed",
        "Dest": "BKK",
        "AirlineCode": "TG",
        "InterviewerID": 3
    },
    {
        "InterviewId": "e6b3122e-0e7c-4072-b65b-de32276d35e5",
        "InterviewEndDate": "2023-06-01 14:29:27",
        "InterviewState": "Completed",
        "Dest": "DUS",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "0917b111-f96f-4054-b9ea-4bf1796fae37",
        "InterviewEndDate": "2023-06-01 14:22:40",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "7abe5e2b-8982-47f2-842f-d4773d214144",
        "InterviewEndDate": "2023-06-01 14:28:27",
        "InterviewState": "Completed",
        "Dest": "DUS",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "718959de-3e1d-4758-8f29-73b3bca8633a",
        "InterviewEndDate": "2023-06-01 14:21:57",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "D8",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a1d70a2c-7969-43b2-9293-d7db4a530812",
        "InterviewEndDate": "2023-06-01 14:28:37",
        "InterviewState": "Completed",
        "Dest": "DUS",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "ab7356ff-12d8-4d05-89b5-d228c2d19b43",
        "InterviewEndDate": "2023-06-01 14:26:49",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "9c25fbcc-18c2-4ec7-9449-aa472367f276",
        "InterviewEndDate": "2023-06-01 14:20:48",
        "InterviewState": "Completed",
        "Dest": "BKK",
        "AirlineCode": "TG",
        "InterviewerID": 3
    },
    {
        "InterviewId": "65cac691-aa1b-4016-a52b-353175967261",
        "InterviewEndDate": "2023-06-01 14:25:15",
        "InterviewState": "Completed",
        "Dest": "DUS",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "51f7c62b-63f7-4d85-99a3-b254aef5dca9",
        "InterviewEndDate": "2023-06-01 14:25:18",
        "InterviewState": "Completed",
        "Dest": "DUS",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "ad8ebdb0-9ed3-47c1-aeec-615b4fcb5d9d",
        "InterviewEndDate": "2023-06-01 14:24:41",
        "InterviewState": "Completed",
        "Dest": "DUS",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "d18be6d7-8a3d-42d4-97e3-93c8678e5b1c",
        "InterviewEndDate": "2023-06-01 14:23:13",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "D8",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4c6a27ac-2abd-435c-8804-df3381173c36",
        "InterviewEndDate": "2023-06-01 14:24:17",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "21f383b2-3225-4631-972e-32477359628f",
        "InterviewEndDate": "2023-06-01 14:29:17",
        "InterviewState": "Completed",
        "Dest": "BKK",
        "AirlineCode": "TG",
        "InterviewerID": 3
    },
    {
        "InterviewId": "0ec1de9e-c4e0-4293-9747-ce90ecf6f2bc",
        "InterviewEndDate": "2023-06-01 14:26:08",
        "InterviewState": "Completed",
        "Dest": "BKK",
        "AirlineCode": "TG",
        "InterviewerID": 3
    },
    {
        "InterviewId": "ba6339fc-dc59-47d7-a204-71a6e72f463c",
        "InterviewEndDate": "2023-06-01 14:30:20",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "18e56590-6c5c-4c5f-97ac-8715d54ef620",
        "InterviewEndDate": "2023-06-01 14:28:30",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "7b2bc76a-7aa5-4970-8e34-71d9837cfa07",
        "InterviewEndDate": "2023-06-01 14:34:54",
        "InterviewState": "Completed",
        "Dest": "DUS",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "673164e1-914b-43ff-ae47-2a905e1c2a8e",
        "InterviewEndDate": "2023-06-01 14:35:46",
        "InterviewState": "Completed",
        "Dest": "DUS",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "ea573773-0c4b-44a5-ba3d-67afa50cc090",
        "InterviewEndDate": "2023-06-01 14:28:54",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "D8",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4e4bb3a8-6179-4540-8aeb-b095dc28c04d",
        "InterviewEndDate": "2023-06-01 14:30:05",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "afac742f-f512-47ab-acd4-17626b0ea49b",
        "InterviewEndDate": "2023-06-01 14:33:03",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "cf3e1fc0-7c01-4971-8f6f-13c9310aa863",
        "InterviewEndDate": "2023-06-01 14:32:03",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "D8",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1aa90028-fb48-4ee3-a8c4-ca7069435120",
        "InterviewEndDate": "2023-06-01 14:40:52",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "397fe28b-5115-400a-9d1a-b60ebff1789c",
        "InterviewEndDate": "2023-06-01 14:32:22",
        "InterviewState": "Completed",
        "Dest": "BKK",
        "AirlineCode": "TG",
        "InterviewerID": 3
    },
    {
        "InterviewId": "3e7cb938-31cf-4680-bb8c-231e62efc60f",
        "InterviewEndDate": "2023-06-01 14:31:39",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "D8",
        "InterviewerID": 1
    },
    {
        "InterviewId": "09ffcfae-23df-437a-954d-365f1f4b432f",
        "InterviewEndDate": "2023-06-01 14:40:19",
        "InterviewState": "Completed",
        "Dest": "DUS",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "0d579ca9-6e62-4b7a-aad5-4dd401e99db1",
        "InterviewEndDate": "2023-06-01 14:42:37",
        "InterviewState": "Completed",
        "Dest": "DUS",
        "AirlineCode": "SK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "6a15940a-114d-4861-bb16-3acc5e18bd60",
        "InterviewEndDate": "2023-06-01 14:34:32",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "03c8b431-4775-46b8-bf1b-05512d665db8",
        "InterviewEndDate": "2023-06-01 14:38:01",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "D8",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c987090c-2c75-408d-8a17-9e7b34faed8e",
        "InterviewEndDate": "2023-06-01 14:35:17",
        "InterviewState": "Completed",
        "Dest": "BKK",
        "AirlineCode": "TG",
        "InterviewerID": 3
    },
    {
        "InterviewId": "c2ff0c6d-5c61-408e-a738-7170b6e38181",
        "InterviewEndDate": "2023-06-01 14:33:53",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "D8",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ac22843b-487e-4c74-a6c6-5724cea1eb5c",
        "InterviewEndDate": "2023-06-01 14:44:03",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "D8",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e47c30bc-6282-4e72-b754-fa097b24d0f8",
        "InterviewEndDate": "2023-06-01 14:39:12",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "30c16512-7034-4d7f-b499-c4a756eb1379",
        "InterviewEndDate": "2023-06-01 14:38:35",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "D8",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9d7280e0-1582-4364-bc4b-8b6d5d507f7f",
        "InterviewEndDate": "2023-06-01 14:37:54",
        "InterviewState": "Completed",
        "Dest": "MUC",
        "AirlineCode": "D8",
        "InterviewerID": 5
    },
    {
        "InterviewId": "af4b7f59-7a2c-4822-9288-75c3e0516a39",
        "InterviewEndDate": "2023-06-01 14:52:44",
        "InterviewState": "Completed",
        "Dest": "BKK",
        "AirlineCode": "TG",
        "InterviewerID": 3
    },
    {
        "InterviewId": "6b8f47d3-5584-43fc-a46b-45113a55d2ae",
        "InterviewEndDate": "2023-06-01 15:00:39",
        "InterviewState": "Completed",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 5
    },
    {
        "InterviewId": "2016d043-1e7e-43b4-8368-8da161dbfeeb",
        "InterviewEndDate": "2023-06-01 14:46:51",
        "InterviewState": "Completed",
        "Dest": "OSL",
        "AirlineCode": "D8",
        "InterviewerID": 1
    },
    {
        "InterviewId": "60aa7e82-9d93-4225-9429-e13d7f81cf10",
        "InterviewEndDate": "2023-06-01 14:56:34",
        "InterviewState": "Completed",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 5
    },
    {
        "InterviewId": "c1dc3b62-560c-4a8f-889d-7ccbff48bc0c",
        "InterviewEndDate": "2023-06-01 15:01:14",
        "InterviewState": "Completed",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 5
    },
    {
        "InterviewId": "f04993c3-1cf8-4ab8-998a-48a17a5877ad",
        "InterviewEndDate": "2023-06-01 14:51:41",
        "InterviewState": "Completed",
        "Dest": "BKK",
        "AirlineCode": "TG",
        "InterviewerID": 3
    },
    {
        "InterviewId": "d6ae0ea5-08d5-4b64-a04a-4a5fb38c5293",
        "InterviewEndDate": "2023-06-01 14:55:34",
        "InterviewState": "Completed",
        "Dest": "BKK",
        "AirlineCode": "TG",
        "InterviewerID": 3
    },
    {
        "InterviewId": "c304f861-72c0-4a7a-a7c9-273bbbaebae3",
        "InterviewEndDate": "2023-06-01 15:05:03",
        "InterviewState": "Completed",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 5
    },
    {
        "InterviewId": "087844c3-5661-4acd-b2ee-047d0889b055",
        "InterviewEndDate": "2023-06-01 14:58:18",
        "InterviewState": "Completed",
        "Dest": "BKK",
        "AirlineCode": "TG",
        "InterviewerID": 3
    },
    {
        "InterviewId": "574a8f67-caa8-4de0-b687-56e85647efce",
        "InterviewEndDate": "2023-06-01 15:09:28",
        "InterviewState": "Completed",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 5
    },
    {
        "InterviewId": "4515f411-d6bb-48d6-b7c5-e09f76649d30",
        "InterviewEndDate": "2023-06-01 15:05:35",
        "InterviewState": "Completed",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 5
    },
    {
        "InterviewId": "a9542f01-ccca-4845-b0f0-d1b85292f23c",
        "InterviewEndDate": "2023-06-01 15:10:01",
        "InterviewState": "Completed",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 5
    },
    {
        "InterviewId": "0b4ef52f-7729-4fa6-b3a2-01a511295eeb",
        "InterviewEndDate": "2023-06-01 15:16:28",
        "InterviewState": "Completed",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 5
    },
    {
        "InterviewId": "02d70093-1c7d-4c7a-aaf6-8d7c3e6f0e33",
        "InterviewEndDate": "2023-06-01 15:28:47",
        "InterviewState": "Completed",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 5
    },
    {
        "InterviewId": "8b6e6823-5dd5-4b7f-9566-4f9fbbba0cd2",
        "InterviewEndDate": "2023-06-01 15:27:13",
        "InterviewState": "Completed",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 5
    },
    {
        "InterviewId": "98cf1154-7e59-4655-b4d4-3233ec8a527d",
        "InterviewEndDate": "2023-06-01 15:26:32",
        "InterviewState": "Completed",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 5
    },
    {
        "InterviewId": "d6a88038-0c37-4679-89db-b77937285caa",
        "InterviewEndDate": "2023-06-01 15:30:41",
        "InterviewState": "Completed",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 5
    },
    {
        "InterviewId": "cfafc29e-4822-48bb-ae93-c61379b449c0",
        "InterviewEndDate": "2023-06-01 15:42:42",
        "InterviewState": "Completed",
        "Dest": "BCN",
        "AirlineCode": "SK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9f37ef66-8eba-4058-a5ec-f2440d293ba3",
        "InterviewEndDate": "2023-06-01 15:41:14",
        "InterviewState": "Completed",
        "Dest": "BCN",
        "AirlineCode": "SK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "21db3641-7506-422d-b92d-814035e874e9",
        "InterviewEndDate": "2023-06-01 15:43:53",
        "InterviewState": "Completed",
        "Dest": "BCN",
        "AirlineCode": "SK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b1f5381c-a8ea-4346-b471-c6f5572e0b73",
        "InterviewEndDate": "2023-06-01 15:45:53",
        "InterviewState": "Completed",
        "Dest": "BCN",
        "AirlineCode": "SK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1ee1447d-129a-4ce7-82fd-201002923383",
        "InterviewEndDate": "2023-06-01 15:48:34",
        "InterviewState": "Completed",
        "Dest": "BCN",
        "AirlineCode": "SK",
        "InterviewerID": 1
    }
]    

 `;