let interview_data_raw = `[
    {
        "InterviewId": "b199a7b9-5e60-40b9-a4ea-4fa385bb46c5",
        "InterviewEndDate": "2023-04-04 15:39:22",
        "InterviewState": "Completed",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6",
        "InterviewerID": 7,
        "download_time": "13-04-2023 12:34:18"
    },
    {
        "InterviewId": "611894fe-2f78-4f05-8286-e9cc966385f9",
        "InterviewEndDate": "2023-04-07 13:38:30",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 7
    },
    {
        "InterviewId": "3a098953-ee22-4aa2-90f8-3090e371cff3",
        "InterviewEndDate": "2023-04-06 15:49:44",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "f276ba34-93b9-40db-85cb-3312eb1c4549",
        "InterviewEndDate": "2023-04-09 13:51:12",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "023790dd-10c2-4bbc-8606-00424d3edc73",
        "InterviewEndDate": "2023-04-09 13:05:39",
        "InterviewState": "Completed",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2d5a043d-9322-43ff-9975-4767c778bb2e",
        "InterviewEndDate": "2023-04-09 12:37:47",
        "InterviewState": "Completed",
        "Flight": "FR 4255",
        "Dest": "NUE",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "425eed9b-9782-487e-8243-7551c00dd1e7",
        "InterviewEndDate": "2023-04-09 13:09:32",
        "InterviewState": "Completed",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ad850be9-6316-4d5e-8d66-669546ef8d69",
        "InterviewEndDate": "2023-04-09 12:40:21",
        "InterviewState": "Completed",
        "Flight": "FR 4255",
        "Dest": "NUE",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "556d2898-1e0a-4781-844d-dde5b4cb7b39",
        "InterviewEndDate": "2023-04-04 15:39:42",
        "InterviewState": "Completed",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "5a8eef68-871b-4f7b-b811-c96e47f431e5",
        "InterviewEndDate": "2023-04-04 15:42:17",
        "InterviewState": "Completed",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "91a934f3-e957-4413-a13a-20fba2148b81",
        "InterviewEndDate": "2023-04-04 15:47:53",
        "InterviewState": "Completed",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "f1855e13-8d8a-4895-9b92-f8b1e0e76482",
        "InterviewEndDate": "2023-04-06 15:36:27",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "419db8a3-3bec-45c2-ad22-f41745644ddb",
        "InterviewEndDate": "2023-04-06 15:38:31",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "a798da6b-88bc-42ad-be7b-c4945087edb9",
        "InterviewEndDate": "2023-04-06 15:36:06",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "8170ece4-7a7b-464e-96e1-bb9c9dfd5d80",
        "InterviewEndDate": "2023-04-06 15:47:19",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "5b9894dd-d5c4-44f1-a5e2-f54ea1b28534",
        "InterviewEndDate": "2023-04-06 15:53:05",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "acdd239b-636d-4eac-8812-5d6608b5d6cb",
        "InterviewEndDate": "2023-04-06 15:53:56",
        "InterviewState": "Completed",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "c8994f65-8f65-4a12-b724-6a7f7258ced5",
        "InterviewEndDate": "2023-04-07 13:47:54",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 7
    },
    {
        "InterviewId": "07737b89-af1c-4911-8c40-afda3db77ef7",
        "InterviewEndDate": "2023-04-07 13:40:50",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 7
    },
    {
        "InterviewId": "53b04755-a00a-4061-9198-f8d158e2db55",
        "InterviewEndDate": "2023-04-07 13:41:28",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 7
    },
    {
        "InterviewId": "0ef154ab-1c12-446e-9024-68321d58da32",
        "InterviewEndDate": "2023-04-07 18:57:03",
        "InterviewState": "Completed",
        "Flight": "LS 1322",
        "Dest": "BHX",
        "AirlineCode": "LS",
        "InterviewerID": 7
    },
    {
        "InterviewId": "cdc74cf8-3539-4551-89e6-ab30e80ab28d",
        "InterviewEndDate": "2023-04-09 12:34:27",
        "InterviewState": "Completed",
        "Flight": "FR 4255",
        "Dest": "NUE",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0f6933f5-ce16-4827-82fc-d464136e481b",
        "InterviewEndDate": "2023-04-09 12:54:28",
        "InterviewState": "Completed",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "760faf15-1e11-4d5c-b54c-305d1438aacd",
        "InterviewEndDate": "2023-04-09 13:11:49",
        "InterviewState": "Completed",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4724f171-998c-4607-a9ce-79589cb1cad6",
        "InterviewEndDate": "2023-04-09 13:08:41",
        "InterviewState": "Completed",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c6c884a5-70c6-430d-828b-dc0e8036ef7a",
        "InterviewEndDate": "2023-04-09 13:49:45",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8db99680-60b7-4d99-8f85-8116d09a35f8",
        "InterviewEndDate": "2023-04-09 13:37:47",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5dd29ff7-350a-4717-9889-92afd33900cd",
        "InterviewEndDate": "2023-04-09 13:39:23",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b149b6ba-9f35-403b-a710-74beeea2f59c",
        "InterviewEndDate": "2023-04-09 13:40:06",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9be17651-0309-43d1-a87c-560dfbcdfd72",
        "InterviewEndDate": "2023-04-09 13:50:28",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "dcccd405-e245-4cc9-9174-c2cda28cbe2c",
        "InterviewEndDate": "2023-04-09 13:51:16",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    }
]    

 `;