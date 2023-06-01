let interview_data_raw = `[
    {
        "InterviewId": "8bb9fa20-9a42-4c80-a66e-93b5ccf07ddd",
        "InterviewEndDate": "2023-05-27 08:14:56",
        "InterviewState": "Completed",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 999,
        "download_time": "01-06-2023 12:15:17"
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
        "InterviewId": "79f4fa43-868e-4457-adf0-5a6eb5a8ae43",
        "InterviewEndDate": "2023-06-01 13:14:51",
        "InterviewState": "Completed",
        "Dest": "IAD",
        "AirlineCode": "SK",
        "InterviewerID": 5
    }
]    

 `;