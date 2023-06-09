let interview_data_raw = `[
    {
        "InterviewId": "7d8dd068-b601-45b3-969e-242e72c6f49d",
        "InterviewEndDate": "2023-04-16 09:11:39",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 7,
        "download_time": "09-06-2023 23:46:48"
    },
    {
        "InterviewId": "5ff83009-9fc3-465b-97fb-4fddc230a041",
        "InterviewEndDate": "2023-04-30 18:02:07",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 10
    },
    {
        "InterviewId": "b199a7b9-5e60-40b9-a4ea-4fa385bb46c5",
        "InterviewEndDate": "2023-04-04 15:39:22",
        "InterviewState": "Completed",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6",
        "InterviewerID": 7
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
        "InterviewId": "c22c03a1-81e3-401e-9de0-45ca5e303703",
        "InterviewEndDate": "2023-04-18 12:09:30",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
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
        "InterviewId": "9a1e39d4-1393-401b-bd4d-6740adced7ec",
        "InterviewEndDate": "2023-04-18 09:23:23",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
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
        "InterviewId": "e26bdc77-6202-4744-8a9e-15dd599b17e9",
        "InterviewEndDate": "2023-04-30 18:04:51",
        "InterviewState": "Completed",
        "Flight": "LO  538",
        "Dest": "WAW",
        "AirlineCode": "LO",
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
        "InterviewId": "5ab2feb8-a198-434e-9651-9c42867e1c9f",
        "InterviewEndDate": "2023-04-17 16:54:41",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
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
        "InterviewId": "0cd20489-4d0d-45ad-b4fd-d44729d4d3d1",
        "InterviewEndDate": "2023-04-14 11:22:30",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
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
        "InterviewId": "154b0c2c-c247-470b-b9ea-2d77f3c0ca70",
        "InterviewEndDate": "2023-04-18 12:03:40",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
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
    },
    {
        "InterviewId": "841e7e0f-d134-4784-ae3e-cbb8b9c9c289",
        "InterviewEndDate": "2023-04-17 16:35:35",
        "InterviewState": "Completed",
        "Flight": "W6 2371",
        "Dest": "MAD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "807ccb90-7a19-40ac-b112-893d54b0b2d5",
        "InterviewEndDate": "2023-04-18 12:08:26",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d31cb643-6ee6-4569-9cc7-2f1d9e8e8cbb",
        "InterviewEndDate": "2023-04-14 12:03:19",
        "InterviewState": "Completed",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732",
        "InterviewerID": 7
    },
    {
        "InterviewId": "f47a4f8e-960e-455f-b948-251f4c56f255",
        "InterviewEndDate": "2023-04-14 11:20:45",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "f90fbe76-6b03-4af8-a744-12cb63d2336f",
        "InterviewEndDate": "2023-04-14 11:27:35",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "e23faa97-492c-41ae-8071-2eeec937f025",
        "InterviewEndDate": "2023-04-23 17:21:12",
        "InterviewState": "Completed",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 10
    },
    {
        "InterviewId": "6cdcb665-f1b8-4739-af9d-b0228e00025e",
        "InterviewEndDate": "2023-04-15 13:54:00",
        "InterviewState": "Completed",
        "Flight": "FR 4090",
        "Dest": "NAP",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "c8d3b0cc-f745-4688-b173-5c2915eced36",
        "InterviewEndDate": "2023-04-14 12:03:00",
        "InterviewState": "Completed",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732",
        "InterviewerID": 7
    },
    {
        "InterviewId": "01afe88c-0bf6-4ddd-9083-45c8e974024f",
        "InterviewEndDate": "2023-04-14 12:01:42",
        "InterviewState": "Completed",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732",
        "InterviewerID": 7
    },
    {
        "InterviewId": "546a63b7-e8d3-4b19-8bc7-15fe6da541cb",
        "InterviewEndDate": "2023-04-14 12:01:33",
        "InterviewState": "Completed",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732",
        "InterviewerID": 7
    },
    {
        "InterviewId": "7d847e9b-c657-4187-8f3c-24e4b90ae642",
        "InterviewEndDate": "2023-04-15 13:55:31",
        "InterviewState": "Completed",
        "Flight": "FR 4090",
        "Dest": "NAP",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "243e8823-aed4-44e5-8ee8-40b32b0e4b70",
        "InterviewEndDate": "2023-04-15 13:46:14",
        "InterviewState": "Completed",
        "Flight": "FR 4090",
        "Dest": "NAP",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "96a4222c-43ab-4d34-a0f1-09e2e57fffb0",
        "InterviewEndDate": "2023-04-15 13:54:50",
        "InterviewState": "Completed",
        "Flight": "FR 4090",
        "Dest": "NAP",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "acb95d15-4ea4-495a-8e35-4e9f77e5ce85",
        "InterviewEndDate": "2023-04-16 09:04:04",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 7
    },
    {
        "InterviewId": "533f1aa5-09e4-4199-b387-08a6fe6329f9",
        "InterviewEndDate": "2023-04-16 06:11:48",
        "InterviewState": "Completed",
        "Flight": "AF 1695",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 7
    },
    {
        "InterviewId": "a263e856-f0c2-49bf-9ef0-b85e9ea4ee2a",
        "InterviewEndDate": "2023-04-15 18:39:24",
        "InterviewState": "Completed",
        "Flight": "A3  879",
        "Dest": "ATH",
        "AirlineCode": "A3",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8fd11604-6858-44be-ade0-0018840c7930",
        "InterviewEndDate": "2023-04-15 18:45:03",
        "InterviewState": "Completed",
        "Flight": "A3  879",
        "Dest": "ATH",
        "AirlineCode": "A3",
        "InterviewerID": 1
    },
    {
        "InterviewId": "570b10ff-1be7-466e-98bc-1b1720f40f1c",
        "InterviewEndDate": "2023-04-15 18:43:20",
        "InterviewState": "Completed",
        "Flight": "A3  879",
        "Dest": "ATH",
        "AirlineCode": "A3",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7e279115-a158-4e52-b522-ff682c24618b",
        "InterviewEndDate": "2023-04-15 19:32:34",
        "InterviewState": "Completed",
        "Flight": "FR 6278",
        "Dest": "CTA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "46ee98c1-3d8a-494d-b3b4-253ef74a51f8",
        "InterviewEndDate": "2023-04-15 19:34:55",
        "InterviewState": "Completed",
        "Flight": "FR 6278",
        "Dest": "CTA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "197079c1-3459-486b-b38e-fdbd140bd60a",
        "InterviewEndDate": "2023-04-15 19:34:20",
        "InterviewState": "Completed",
        "Flight": "FR 6278",
        "Dest": "CTA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f899b1f2-1617-400b-bb3f-68f4a89b8c12",
        "InterviewEndDate": "2023-04-15 20:49:38",
        "InterviewState": "Completed",
        "Flight": "FR 3827",
        "Dest": "BLQ",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ba7d9c43-215d-4f13-aca4-3013e9924a29",
        "InterviewEndDate": "2023-04-15 20:56:48",
        "InterviewState": "Completed",
        "Flight": "FR 3827",
        "Dest": "BLQ",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "48883af5-0a8c-4827-b055-13831ea72f8f",
        "InterviewEndDate": "2023-04-15 20:51:23",
        "InterviewState": "Completed",
        "Flight": "FR 3827",
        "Dest": "BLQ",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d6762336-adda-4531-bcaa-e99e5fff7761",
        "InterviewEndDate": "2023-04-17 10:50:01",
        "InterviewState": "Completed",
        "Flight": "FR 8745",
        "Dest": "BLL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "755ed7ae-b677-478d-b3f9-ae2b1e0ae7b7",
        "InterviewEndDate": "2023-04-17 11:01:22",
        "InterviewState": "Completed",
        "Flight": "FR 8745",
        "Dest": "BLL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d34eebcc-1dec-4df5-b371-acce72914b42",
        "InterviewEndDate": "2023-04-17 10:57:17",
        "InterviewState": "Completed",
        "Flight": "FR 8745",
        "Dest": "BLL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4cea58c7-0cd3-43c9-82dc-e19d48343789",
        "InterviewEndDate": "2023-04-16 06:11:20",
        "InterviewState": "Completed",
        "Flight": "AF 1695",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 7
    },
    {
        "InterviewId": "6b6399a6-0455-4f82-8c8a-d6b5fa4e5e98",
        "InterviewEndDate": "2023-04-16 09:00:17",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 7
    },
    {
        "InterviewId": "4e120fbd-4189-424c-9eec-92115252ca6b",
        "InterviewEndDate": "2023-04-16 09:02:35",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 7
    },
    {
        "InterviewId": "555ad8dd-8379-4f61-bc01-5092a4455887",
        "InterviewEndDate": "2023-04-16 09:07:39",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 7
    },
    {
        "InterviewId": "3ba8c410-5331-4bce-be0f-f97b54bebd8f",
        "InterviewEndDate": "2023-04-17 16:55:33",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "fb00ab90-20e7-42ee-b545-f8a3cb84f2e3",
        "InterviewEndDate": "2023-04-23 17:21:23",
        "InterviewState": "Completed",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 10
    },
    {
        "InterviewId": "3acaec82-2df0-43ea-8d2a-631297475de0",
        "InterviewEndDate": "2023-04-17 10:58:56",
        "InterviewState": "Completed",
        "Flight": "FR 8745",
        "Dest": "BLL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "01a352cf-ba66-4510-97f4-d09455eef14b",
        "InterviewEndDate": "2023-04-17 10:58:28",
        "InterviewState": "Completed",
        "Flight": "FR 8745",
        "Dest": "BLL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3330b458-5c06-49fb-8e77-52cac13643cf",
        "InterviewEndDate": "2023-04-17 12:18:19",
        "InterviewState": "Completed",
        "Flight": "W6 2403",
        "Dest": "NYO",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f79d02b2-860e-4393-b908-2e5209855573",
        "InterviewEndDate": "2023-04-18 11:10:17",
        "InterviewState": "Completed",
        "Flight": "W6 2359",
        "Dest": "NAP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b98274cb-19d0-4335-a7a5-24d14e4384a3",
        "InterviewEndDate": "2023-04-17 12:16:51",
        "InterviewState": "Completed",
        "Flight": "W6 2403",
        "Dest": "NYO",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a4f6d079-d943-4871-a59c-24fd6e720b6e",
        "InterviewEndDate": "2023-04-17 16:29:09",
        "InterviewState": "Completed",
        "Flight": "W6 2371",
        "Dest": "MAD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "86c91fcf-e131-42e8-b585-a2ea93b0ba5f",
        "InterviewEndDate": "2023-04-17 12:22:30",
        "InterviewState": "Completed",
        "Flight": "W6 2403",
        "Dest": "NYO",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f62efaee-56e5-4e30-9dc7-b83ad2d8b4b2",
        "InterviewEndDate": "2023-04-17 12:54:58",
        "InterviewState": "Completed",
        "Flight": "FR 4090",
        "Dest": "NAP",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1b706e85-66a9-479a-b40d-c98fabcb7dec",
        "InterviewEndDate": "2023-04-17 16:29:20",
        "InterviewState": "Completed",
        "Flight": "W6 2371",
        "Dest": "MAD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "37ddada8-c03f-4987-9ae6-a29a02f8236a",
        "InterviewEndDate": "2023-04-17 16:37:11",
        "InterviewState": "Completed",
        "Flight": "W6 2371",
        "Dest": "MAD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cd4aaf81-8442-4ba6-a84a-7eef7055bb37",
        "InterviewEndDate": "2023-04-18 09:25:32",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "53651ed4-a70f-42e0-b11b-dbecbe12c9b6",
        "InterviewEndDate": "2023-04-17 16:36:46",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "727ded0a-860e-4291-a51c-7a254919c0da",
        "InterviewEndDate": "2023-04-17 16:40:18",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "6e74a946-c5a0-4c6d-ac09-8f69d6ae496e",
        "InterviewEndDate": "2023-04-17 16:55:01",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "8b6c2da7-c2b9-441a-b036-b2dc6567e9ee",
        "InterviewEndDate": "2023-04-24 15:01:31",
        "InterviewState": "Completed",
        "Flight": "LX 2255",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 7
    },
    {
        "InterviewId": "77d892dc-d5a6-4e19-98b3-99a6234d6ae3",
        "InterviewEndDate": "2023-04-18 09:43:58",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "27f3c545-1c35-4b70-a3f6-9f7125eaea1e",
        "InterviewEndDate": "2023-04-18 09:41:19",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e757cce8-35a4-4921-9301-621645eb2703",
        "InterviewEndDate": "2023-04-18 09:51:00",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e448dd84-05da-4526-8846-5849eaec864f",
        "InterviewEndDate": "2023-04-18 11:58:21",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d774af74-28b8-45bb-bdf0-1992b6eb0f43",
        "InterviewEndDate": "2023-04-18 11:52:46",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2fa75139-5e4c-4ec8-a258-8740a46d8674",
        "InterviewEndDate": "2023-04-18 11:50:24",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "73c81f5c-e851-4f03-a39c-94cc2a0e98cb",
        "InterviewEndDate": "2023-04-18 11:05:12",
        "InterviewState": "Completed",
        "Flight": "W6 2359",
        "Dest": "NAP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "423cb5a9-251e-462c-a54f-d0c890487675",
        "InterviewEndDate": "2023-04-18 11:19:12",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 7
    },
    {
        "InterviewId": "efd1443e-9257-4043-9143-65a7f1e0e0e3",
        "InterviewEndDate": "2023-04-18 11:17:33",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 7
    },
    {
        "InterviewId": "06b1ab81-2b1e-45d6-bfb7-20951e837e29",
        "InterviewEndDate": "2023-04-18 11:19:25",
        "InterviewState": "Completed",
        "Flight": "W6 2359",
        "Dest": "NAP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e4e61aca-9a03-4864-a739-3edcacb62f94",
        "InterviewEndDate": "2023-04-18 11:19:50",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 7
    },
    {
        "InterviewId": "6efc73c2-4dfa-4ec3-88d0-4417bd90ca33",
        "InterviewEndDate": "2023-04-18 11:18:23",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 7
    },
    {
        "InterviewId": "b056cba8-f6d2-4630-a293-f92bf3080d16",
        "InterviewEndDate": "2023-04-18 11:21:43",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 7
    },
    {
        "InterviewId": "96b1867a-30ad-4216-881c-e0ff6058936a",
        "InterviewEndDate": "2023-04-18 11:19:54",
        "InterviewState": "Completed",
        "Flight": "W6 2359",
        "Dest": "NAP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "543f9448-4885-4a6e-b288-dcb27de8dc68",
        "InterviewEndDate": "2023-04-23 17:16:00",
        "InterviewState": "Completed",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 10
    },
    {
        "InterviewId": "e123218c-e305-4bfd-8615-f4fe7dbcba6f",
        "InterviewEndDate": "2023-04-18 15:30:44",
        "InterviewState": "Completed",
        "Flight": "W6 2213",
        "Dest": "HRG",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "3426139b-1d2c-4733-b28e-bc0c849c8c86",
        "InterviewEndDate": "2023-04-18 11:57:20",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "42b47e37-94eb-498e-a5cc-88fc4201c194",
        "InterviewEndDate": "2023-04-18 11:57:03",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b5eda685-2a0a-4f83-88fe-6a0f21f07058",
        "InterviewEndDate": "2023-04-18 15:00:20",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fd5e6fed-fe6d-4a80-bcf9-f6c5a4eb00c1",
        "InterviewEndDate": "2023-04-18 13:23:59",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5bdd883a-305c-4793-aa11-f0f920a101a3",
        "InterviewEndDate": "2023-04-18 12:50:36",
        "InterviewState": "Completed",
        "Flight": "EW 7783",
        "Dest": "HAM",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5045e6a8-2511-47cb-8429-aa9802d1ed3e",
        "InterviewEndDate": "2023-04-18 12:50:41",
        "InterviewState": "Completed",
        "Flight": "EW 7783",
        "Dest": "HAM",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4c83ab8d-eae5-498f-9c7b-29dd05976b5e",
        "InterviewEndDate": "2023-04-18 12:54:48",
        "InterviewState": "Completed",
        "Flight": "EW 7783",
        "Dest": "HAM",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9cfe898b-3f2e-40a4-afd3-94a5b467917d",
        "InterviewEndDate": "2023-04-18 13:36:12",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b1d15148-27ae-4cde-b4dd-948c6a9bbecc",
        "InterviewEndDate": "2023-04-18 13:31:06",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "dd41f71c-6db3-4cfe-82a2-82f8e2da013d",
        "InterviewEndDate": "2023-04-18 15:00:22",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5dd91068-984b-4830-a801-4099fd3c9f43",
        "InterviewEndDate": "2023-04-18 13:34:12",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "78d5f2cb-f07b-43ea-b7ea-78afbf5447ab",
        "InterviewEndDate": "2023-04-19 15:04:05",
        "InterviewState": "Completed",
        "Flight": "FR 8859",
        "Dest": "LIS",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d33ddfb9-f27f-4cef-a619-ad46d849343f",
        "InterviewEndDate": "2023-04-19 18:39:31",
        "InterviewState": "Completed",
        "Flight": "W6 2441",
        "Dest": "ATH",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2594826c-a9e2-4ab5-a54f-d8cdfa83a720",
        "InterviewEndDate": "2023-04-18 14:56:02",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e89f45bf-29f5-4124-9ad4-e944fe26b2af",
        "InterviewEndDate": "2023-04-18 15:02:18",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9f84ec3f-078e-43e0-bb84-03f9c0709524",
        "InterviewEndDate": "2023-04-18 14:59:46",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ea99ca6e-0402-42a6-b3e4-802d60620d93",
        "InterviewEndDate": "2023-04-18 14:59:19",
        "InterviewState": "Completed",
        "Flight": "W6 2213",
        "Dest": "HRG",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "a6952c83-b74c-4c94-8911-743b161f9c6d",
        "InterviewEndDate": "2023-04-18 14:58:25",
        "InterviewState": "Completed",
        "Flight": "W6 2213",
        "Dest": "HRG",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "6341c72f-9867-4304-b265-f823620c680b",
        "InterviewEndDate": "2023-04-18 15:03:40",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ca46c131-4c68-4d50-a834-791bfec0b3c8",
        "InterviewEndDate": "2023-04-23 14:26:11",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 10
    },
    {
        "InterviewId": "b390514d-77dc-4ede-b09e-e4f62baabef0",
        "InterviewEndDate": "2023-04-23 14:17:10",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 10
    },
    {
        "InterviewId": "cdc2ae63-9a3f-4453-a723-3556387edbf6",
        "InterviewEndDate": "2023-04-18 15:10:42",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9a45efab-8aed-4f80-a740-214a58422185",
        "InterviewEndDate": "2023-04-18 16:46:04",
        "InterviewState": "Completed",
        "Flight": "FR 2273",
        "Dest": "AGP",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cceba215-59dd-4080-a71c-aed8fd5b44b0",
        "InterviewEndDate": "2023-04-18 16:38:53",
        "InterviewState": "Completed",
        "Flight": "FR 2273",
        "Dest": "AGP",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8419e830-3a11-437e-a0ed-06bcd61cc86c",
        "InterviewEndDate": "2023-04-19 13:47:05",
        "InterviewState": "Completed",
        "Flight": "FR 1243",
        "Dest": "ATH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "799d0e73-2d98-4f16-8d9c-eb74dd41efe9",
        "InterviewEndDate": "2023-04-19 17:56:11",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9c729fe2-dece-42fd-8d2a-5cd0f0512c44",
        "InterviewEndDate": "2023-04-23 17:15:14",
        "InterviewState": "Completed",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 10
    },
    {
        "InterviewId": "3b752fba-f2d1-4fda-b428-b12510f98e22",
        "InterviewEndDate": "2023-04-18 16:33:48",
        "InterviewState": "Completed",
        "Flight": "FR 2273",
        "Dest": "AGP",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "114b83c5-2fd9-4fd1-a667-a6f40384db51",
        "InterviewEndDate": "2023-04-19 13:52:42",
        "InterviewState": "Completed",
        "Flight": "FR 1243",
        "Dest": "ATH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3843915e-a64e-4058-8593-3cf31a6cb789",
        "InterviewEndDate": "2023-04-23 13:44:28",
        "InterviewState": "Completed",
        "Flight": "W6 2367",
        "Dest": "ORY",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "52e6a87e-ac21-4074-910c-ea59f27a19d9",
        "InterviewEndDate": "2023-04-19 13:50:34",
        "InterviewState": "Completed",
        "Flight": "FR 1243",
        "Dest": "ATH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "81f078f2-2778-4762-a0e0-b3ae6e0939f5",
        "InterviewEndDate": "2023-04-19 13:50:05",
        "InterviewState": "Completed",
        "Flight": "FR 1243",
        "Dest": "ATH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f9dd9f22-626c-4f94-844a-9519852b07eb",
        "InterviewEndDate": "2023-04-19 17:42:52",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8510da4a-5b00-49c3-9f4b-7749afe8dc26",
        "InterviewEndDate": "2023-04-19 14:52:48",
        "InterviewState": "Completed",
        "Flight": "FR 8859",
        "Dest": "LIS",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1c919aaa-e98c-4fd4-933e-8a08c758e9c5",
        "InterviewEndDate": "2023-04-19 14:57:36",
        "InterviewState": "Completed",
        "Flight": "FR 8859",
        "Dest": "LIS",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "bea4d25a-a65b-4e8f-ab4d-fb1c7b583dbc",
        "InterviewEndDate": "2023-04-19 17:59:56",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2db50b9e-3d7c-4f84-8d7f-c82ba62a7a17",
        "InterviewEndDate": "2023-04-19 17:55:25",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9770f707-61db-49a2-bcea-bf97dd1e9ddc",
        "InterviewEndDate": "2023-04-19 17:54:33",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "53716f8f-c5b4-4405-8999-52d1da1137b6",
        "InterviewEndDate": "2023-04-19 17:54:38",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "03c9a276-fbf7-4708-9a2c-a932251e93c3",
        "InterviewEndDate": "2023-04-19 18:07:12",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0d7d35b4-01d6-48b5-820e-f5c9120b775f",
        "InterviewEndDate": "2023-04-19 18:07:11",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d0cf5e7b-2e28-4ae4-94c1-db67cc5da8be",
        "InterviewEndDate": "2023-04-19 18:05:50",
        "InterviewState": "Completed",
        "Flight": "W6 2451",
        "Dest": "LCA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6eae0e67-a304-4b36-80dd-d6dcf931e208",
        "InterviewEndDate": "2023-04-19 18:40:40",
        "InterviewState": "Completed",
        "Flight": "W6 2441",
        "Dest": "ATH",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "34139031-cb65-4fec-8bcf-aeda97494a74",
        "InterviewEndDate": "2023-04-23 17:51:31",
        "InterviewState": "Completed",
        "Flight": "W6 2393",
        "Dest": "LIS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b9312743-e59c-4bc0-99b2-4465bff42a59",
        "InterviewEndDate": "2023-04-26 10:48:26",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "dbecb618-152f-42e7-a233-ed93c5cd8a41",
        "InterviewEndDate": "2023-04-19 19:18:36",
        "InterviewState": "Completed",
        "Flight": "FR 2020",
        "Dest": "PMO",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "aef02ae8-e883-498b-8b17-4df70c09da8c",
        "InterviewEndDate": "2023-04-19 19:25:03",
        "InterviewState": "Completed",
        "Flight": "FR 2020",
        "Dest": "PMO",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ee466338-724e-486c-9c5c-c2f68c288b30",
        "InterviewEndDate": "2023-04-19 19:18:50",
        "InterviewState": "Completed",
        "Flight": "FR 2020",
        "Dest": "PMO",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "db466028-acb8-4d9d-a69e-a0a22da731e2",
        "InterviewEndDate": "2023-04-20 16:41:48",
        "InterviewState": "Completed",
        "Flight": "FR  605",
        "Dest": "CPH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5d90e02a-3858-4f8f-a95a-03b157760b46",
        "InterviewEndDate": "2023-04-20 15:16:32",
        "InterviewState": "Completed",
        "Flight": "TK 7747",
        "Dest": "SAW",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "587d4300-29ea-4d0b-be68-faf5b2660a17",
        "InterviewEndDate": "2023-04-20 21:28:13",
        "InterviewState": "Completed",
        "Flight": "FR 5190",
        "Dest": "BRI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0baa171a-b5d3-4f22-ba09-13ac9f5b95fa",
        "InterviewEndDate": "2023-04-20 15:17:41",
        "InterviewState": "Completed",
        "Flight": "TK 7747",
        "Dest": "SAW",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f0914a66-54f2-4c78-9ffe-bd1991f8987a",
        "InterviewEndDate": "2023-04-20 16:45:50",
        "InterviewState": "Completed",
        "Flight": "FR  605",
        "Dest": "CPH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d22bbb0c-966b-4dd8-9570-5fbc3ab89225",
        "InterviewEndDate": "2023-04-20 17:31:53",
        "InterviewState": "Completed",
        "Flight": "FR 6748",
        "Dest": "GOT",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "bc1dbb55-7649-4d93-a37e-76467e21ae64",
        "InterviewEndDate": "2023-04-20 17:35:30",
        "InterviewState": "Completed",
        "Flight": "FR 6748",
        "Dest": "GOT",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fe0a6607-60af-4bea-85b8-a5adfdd0d730",
        "InterviewEndDate": "2023-04-20 17:27:56",
        "InterviewState": "Completed",
        "Flight": "FR 6748",
        "Dest": "GOT",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cd8bd0bf-9b9f-4f2e-9ae7-a21dda8dfeca",
        "InterviewEndDate": "2023-04-20 20:17:49",
        "InterviewState": "Completed",
        "Flight": "W6 2361",
        "Dest": "BRI",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4eed6a8b-3d68-47e7-993b-d7586aff1e0a",
        "InterviewEndDate": "2023-04-21 16:54:32",
        "InterviewState": "Completed",
        "Flight": "EZS1566",
        "Dest": "GVA",
        "AirlineCode": "EZS1566",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e7ccfd76-1f12-44fb-8cd0-2a90ab6b78c1",
        "InterviewEndDate": "2023-04-20 20:16:55",
        "InterviewState": "Completed",
        "Flight": "W6 2361",
        "Dest": "BRI",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e7a7922d-20bd-4724-9c03-1f86f79c9fa9",
        "InterviewEndDate": "2023-04-21 19:12:34",
        "InterviewState": "Completed",
        "Flight": "FR 6712",
        "Dest": "MAD",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "349292fa-3632-45fa-abe3-667f7b0ebec3",
        "InterviewEndDate": "2023-04-20 21:23:12",
        "InterviewState": "Completed",
        "Flight": "FR 5190",
        "Dest": "BRI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "43fc0a3d-f669-4e30-9edb-abdebe1de7d6",
        "InterviewEndDate": "2023-04-23 12:34:06",
        "InterviewState": "Completed",
        "Flight": "W6 2205",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cb57081a-c074-4c66-a538-c2ddebe6923d",
        "InterviewEndDate": "2023-04-21 16:56:37",
        "InterviewState": "Completed",
        "Flight": "EZS1566",
        "Dest": "GVA",
        "AirlineCode": "EZS1566",
        "InterviewerID": 1
    },
    {
        "InterviewId": "59b8cf94-1056-4793-a592-f87f50779848",
        "InterviewEndDate": "2023-04-21 16:56:50",
        "InterviewState": "Completed",
        "Flight": "EZS1566",
        "Dest": "GVA",
        "AirlineCode": "EZS1566",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cbcac0bb-c810-410d-89f0-36d648adfc66",
        "InterviewEndDate": "2023-04-21 19:10:27",
        "InterviewState": "Completed",
        "Flight": "FR 6712",
        "Dest": "MAD",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "023b5950-84c2-47c8-bf0f-7aadae7886a0",
        "InterviewEndDate": "2023-04-23 12:22:02",
        "InterviewState": "Completed",
        "Flight": "W6 2205",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "abf033e8-85bc-40e8-a24c-a42a0bd38a5b",
        "InterviewEndDate": "2023-04-23 12:23:07",
        "InterviewState": "Completed",
        "Flight": "W6 2205",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "549497bb-2363-4632-afe9-96192ab79aa0",
        "InterviewEndDate": "2023-04-23 12:30:33",
        "InterviewState": "Completed",
        "Flight": "W6 2205",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cbdb07a1-492f-4d35-9205-50c917c3034d",
        "InterviewEndDate": "2023-04-23 12:34:42",
        "InterviewState": "Completed",
        "Flight": "W6 2205",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8ce66b69-85b9-479f-90b8-8bdb5821d16e",
        "InterviewEndDate": "2023-04-23 12:31:11",
        "InterviewState": "Completed",
        "Flight": "W6 2205",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ffdbfb09-9dc9-49c6-98de-ad5d6fa1dedd",
        "InterviewEndDate": "2023-04-23 13:30:40",
        "InterviewState": "Completed",
        "Flight": "W6 2367",
        "Dest": "ORY",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "06e8dfe4-1bdf-4495-bbf0-1b650c673a06",
        "InterviewEndDate": "2023-04-23 13:33:14",
        "InterviewState": "Completed",
        "Flight": "W6 2367",
        "Dest": "ORY",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7db6527b-e7a2-427c-91d6-f3449b5c7acc",
        "InterviewEndDate": "2023-04-23 13:32:00",
        "InterviewState": "Completed",
        "Flight": "W6 2367",
        "Dest": "ORY",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d1c72ba7-b799-41cf-bc0a-2faccfb2a8ab",
        "InterviewEndDate": "2023-04-23 13:32:44",
        "InterviewState": "Completed",
        "Flight": "W6 2367",
        "Dest": "ORY",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "84d8c03f-0d58-4b05-acac-7a36f5e5f414",
        "InterviewEndDate": "2023-04-23 13:32:25",
        "InterviewState": "Completed",
        "Flight": "W6 2367",
        "Dest": "ORY",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a7eac902-9696-4b7d-a97c-7c00bd333d49",
        "InterviewEndDate": "2023-04-23 14:45:36",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b005de64-ba34-4fa0-8c93-edf1c14f77ec",
        "InterviewEndDate": "2023-04-23 13:55:24",
        "InterviewState": "Completed",
        "Flight": "W6 2367",
        "Dest": "ORY",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "33c79df0-946b-4538-bcc7-66e1c9beaf9c",
        "InterviewEndDate": "2023-04-23 17:49:35",
        "InterviewState": "Completed",
        "Flight": "W6 2393",
        "Dest": "LIS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "be3b5adb-fa6b-4900-8cd7-8588495b14b7",
        "InterviewEndDate": "2023-04-23 14:27:10",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 10
    },
    {
        "InterviewId": "f62971a4-ea80-4a38-89d1-ee687149d867",
        "InterviewEndDate": "2023-04-23 14:46:42",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4a7d6c2d-2832-43f9-bf39-30ee13f95381",
        "InterviewEndDate": "2023-04-23 14:45:41",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fcad1e9d-3a27-42b7-97fe-e8684bc84467",
        "InterviewEndDate": "2023-04-23 14:47:41",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f98e238b-699a-492b-8316-30c7dae3a02e",
        "InterviewEndDate": "2023-04-23 14:42:49",
        "InterviewState": "Completed",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2288a7d1-3172-44b0-8ee3-578d0a5c0f27",
        "InterviewEndDate": "2023-04-23 17:33:34",
        "InterviewState": "Completed",
        "Flight": "W6 2393",
        "Dest": "LIS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "dbb2b29a-6e37-494f-acd6-e6ec4af42ee7",
        "InterviewEndDate": "2023-04-23 17:37:20",
        "InterviewState": "Completed",
        "Flight": "W6 2393",
        "Dest": "LIS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e6f8c7b8-c8e9-4df6-a2e0-c5f34e5c7780",
        "InterviewEndDate": "2023-04-23 17:31:16",
        "InterviewState": "Completed",
        "Flight": "W6 2393",
        "Dest": "LIS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e4fa364b-419c-4971-96a6-568b7febff06",
        "InterviewEndDate": "2023-04-23 17:33:23",
        "InterviewState": "Completed",
        "Flight": "W6 2393",
        "Dest": "LIS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "28e33d3b-874a-401c-b3dc-38b7a56c6b27",
        "InterviewEndDate": "2023-04-23 17:12:22",
        "InterviewState": "Completed",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 10
    },
    {
        "InterviewId": "69fde93c-90c6-42a2-859a-9bcc629bc02d",
        "InterviewEndDate": "2023-04-23 17:18:14",
        "InterviewState": "Completed",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 10
    },
    {
        "InterviewId": "0773e6b8-ccee-4c3c-8ec1-30f2dea3ec8b",
        "InterviewEndDate": "2023-04-23 17:19:42",
        "InterviewState": "Completed",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 10
    },
    {
        "InterviewId": "90f64cf9-669f-4167-956c-f2cb6ef610e0",
        "InterviewEndDate": "2023-04-25 16:59:03",
        "InterviewState": "Completed",
        "Flight": "FR 4229",
        "Dest": "BVA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "74a6c774-130b-49f4-a6f8-fa8fbc2d0553",
        "InterviewEndDate": "2023-04-25 17:03:42",
        "InterviewState": "Completed",
        "Flight": "FR 4229",
        "Dest": "BVA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "3a192186-c5f8-43ed-8248-ca8c3d233d2e",
        "InterviewEndDate": "2023-04-24 14:51:59",
        "InterviewState": "Completed",
        "Flight": "LX 2255",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 7
    },
    {
        "InterviewId": "48b9de20-4d1a-4e67-a9fa-8779a84771e0",
        "InterviewEndDate": "2023-04-23 17:34:44",
        "InterviewState": "Completed",
        "Flight": "W6 2393",
        "Dest": "LIS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e7d654f1-83d4-4b3a-8eff-d219cd613389",
        "InterviewEndDate": "2023-04-26 11:34:06",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2118c6e7-5ad5-4b12-be6d-a0b6f0adf2c8",
        "InterviewEndDate": "2023-04-24 09:12:46",
        "InterviewState": "Completed",
        "Flight": "EW 7785",
        "Dest": "HAM",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fcaa6dd1-882f-4a1e-b1bd-cdd9707a8231",
        "InterviewEndDate": "2023-04-24 09:19:01",
        "InterviewState": "Completed",
        "Flight": "EW 7785",
        "Dest": "HAM",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "af17e1a0-4379-4e26-a50a-f43908637096",
        "InterviewEndDate": "2023-04-24 09:12:32",
        "InterviewState": "Completed",
        "Flight": "EW 7785",
        "Dest": "HAM",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3e68843f-7751-41c5-811c-8df638f63d30",
        "InterviewEndDate": "2023-04-24 15:04:51",
        "InterviewState": "Completed",
        "Flight": "FR 5023",
        "Dest": "PSA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7d60d365-e723-4e73-9275-a22123863a66",
        "InterviewEndDate": "2023-04-26 15:05:31",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9fefeebd-a03f-48e1-a4aa-6d7e3f0d84d3",
        "InterviewEndDate": "2023-04-26 14:54:29",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3c33b06d-4dd4-4139-8f4d-7a55cf1160ca",
        "InterviewEndDate": "2023-04-24 14:56:50",
        "InterviewState": "Completed",
        "Flight": "LX 2255",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 7
    },
    {
        "InterviewId": "e0b1148b-56e5-4aee-bfce-4f60f7b145f3",
        "InterviewEndDate": "2023-04-24 14:54:50",
        "InterviewState": "Completed",
        "Flight": "LX 2255",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 7
    },
    {
        "InterviewId": "4d0e2e9c-be46-42f1-a1bb-cae541a54df8",
        "InterviewEndDate": "2023-04-24 15:00:49",
        "InterviewState": "Completed",
        "Flight": "FR 5023",
        "Dest": "PSA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8dd1c291-fbf6-424b-852d-76bca1500f2c",
        "InterviewEndDate": "2023-04-24 15:01:52",
        "InterviewState": "Completed",
        "Flight": "FR 5023",
        "Dest": "PSA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "21727f8b-94f2-449d-8b70-c1cf468fd22f",
        "InterviewEndDate": "2023-04-24 15:01:13",
        "InterviewState": "Completed",
        "Flight": "FR 5023",
        "Dest": "PSA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "340acb7b-f867-43a2-b2bc-f11e79a786bf",
        "InterviewEndDate": "2023-04-25 17:00:44",
        "InterviewState": "Completed",
        "Flight": "FR 4229",
        "Dest": "BVA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "1b83c2a1-d781-475d-8635-6800101cfb8e",
        "InterviewEndDate": "2023-04-24 15:01:30",
        "InterviewState": "Completed",
        "Flight": "LX 2255",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 7
    },
    {
        "InterviewId": "55c090ce-411d-4371-8524-bd60c77d160e",
        "InterviewEndDate": "2023-04-30 18:07:52",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 10
    },
    {
        "InterviewId": "0a447aa2-4a54-4b43-986f-e3ac0fc9535f",
        "InterviewEndDate": "2023-04-30 18:04:03",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 10
    },
    {
        "InterviewId": "68f5803b-3130-40ef-827d-df8680c8a6f4",
        "InterviewEndDate": "2023-04-25 05:16:35",
        "InterviewState": "Completed",
        "Flight": "W6 2247",
        "Dest": "KUT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "de03c09f-a362-4da3-8f81-fd941293b583",
        "InterviewEndDate": "2023-04-25 05:04:19",
        "InterviewState": "Completed",
        "Flight": "W6 2247",
        "Dest": "KUT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "89a35cda-038f-4fb8-a617-3ab363235a19",
        "InterviewEndDate": "2023-04-25 05:16:54",
        "InterviewState": "Completed",
        "Flight": "W6 2247",
        "Dest": "KUT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d594866b-979a-4a35-9d70-4b2f28e0ac85",
        "InterviewEndDate": "2023-04-25 05:17:22",
        "InterviewState": "Completed",
        "Flight": "W6 2247",
        "Dest": "KUT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "aaa05e8c-71c9-441e-987e-48b32275f8e2",
        "InterviewEndDate": "2023-04-26 15:02:28",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "aaa8e13a-5ea9-4667-b0fa-fe5487fff995",
        "InterviewEndDate": "2023-04-25 07:32:30",
        "InterviewState": "Completed",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4ac99b91-f1f1-4d84-bc68-d230a0c57f71",
        "InterviewEndDate": "2023-04-25 06:10:15",
        "InterviewState": "Completed",
        "Flight": "W6 2499",
        "Dest": "GYD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5993276d-d87d-496e-888b-cff4cebb9e63",
        "InterviewEndDate": "2023-04-25 06:13:11",
        "InterviewState": "Completed",
        "Flight": "W6 2499",
        "Dest": "GYD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c128835b-d9c2-4c06-a9f8-160ee1f5f8ba",
        "InterviewEndDate": "2023-04-25 06:06:44",
        "InterviewState": "Completed",
        "Flight": "W6 2499",
        "Dest": "GYD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "adeda3f1-3be3-4513-b718-27df13ace67c",
        "InterviewEndDate": "2023-04-25 07:29:57",
        "InterviewState": "Completed",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f431c914-83a5-43f8-b30d-a575df2f51e9",
        "InterviewEndDate": "2023-04-25 07:27:10",
        "InterviewState": "Completed",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0ee7350c-cd19-43c7-8f14-f1e0b139b50d",
        "InterviewEndDate": "2023-04-25 07:26:39",
        "InterviewState": "Completed",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a06ec37a-f7d6-4808-bad5-70aa11011ed4",
        "InterviewEndDate": "2023-04-25 07:29:59",
        "InterviewState": "Completed",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cb3a79fa-fdc8-4101-9d0c-2efdaa87c741",
        "InterviewEndDate": "2023-04-26 10:51:16",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3cde17b5-a1a1-48d9-a718-6f46e394f3bb",
        "InterviewEndDate": "2023-04-26 10:27:02",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1a4913fd-f50f-4950-817d-b8c686d169a9",
        "InterviewEndDate": "2023-04-26 10:49:26",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "00932efb-5d4d-4a7c-aab8-0219de5b873b",
        "InterviewEndDate": "2023-04-25 10:08:31",
        "InterviewState": "Completed",
        "Flight": "LH 1335",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d1f4cdc3-a6d2-40e5-b343-072117de9e22",
        "InterviewEndDate": "2023-04-25 10:08:51",
        "InterviewState": "Completed",
        "Flight": "LH 1335",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "09e237ee-1770-421b-8735-22345c469eab",
        "InterviewEndDate": "2023-04-25 10:34:18",
        "InterviewState": "Completed",
        "Flight": "LH 1675",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "72a329bd-c4eb-4bc1-bb46-1c80b97fb610",
        "InterviewEndDate": "2023-04-25 10:43:44",
        "InterviewState": "Completed",
        "Flight": "LH 1675",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "65aceb29-bea6-47dd-b785-9ce4702b00f8",
        "InterviewEndDate": "2023-04-26 10:22:06",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8eb6aa33-f605-459d-8ff8-2fed36b8ef6b",
        "InterviewEndDate": "2023-04-26 10:29:03",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "72e0fd97-a565-4e97-84c8-b1cd31ba2b97",
        "InterviewEndDate": "2023-04-25 16:56:12",
        "InterviewState": "Completed",
        "Flight": "FR 4229",
        "Dest": "BVA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "978428b2-0047-4f83-a8f8-517c6e1b9858",
        "InterviewEndDate": "2023-04-25 17:00:15",
        "InterviewState": "Completed",
        "Flight": "FR 4229",
        "Dest": "BVA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "6ce33e6e-17a1-42ca-b1c2-8a2f5c04b082",
        "InterviewEndDate": "2023-04-25 17:06:55",
        "InterviewState": "Completed",
        "Flight": "FR 4229",
        "Dest": "BVA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "d0c4c8ac-767e-4703-9d93-4e3795f0159d",
        "InterviewEndDate": "2023-04-26 10:28:04",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "94a7c7f8-4473-4cb2-bdd8-2d1903f63827",
        "InterviewEndDate": "2023-04-26 10:50:16",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3a9deaa8-d355-4079-a5aa-7b19fabc4259",
        "InterviewEndDate": "2023-04-26 10:47:39",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f279ceda-aeef-412a-818e-3d30965ce924",
        "InterviewEndDate": "2023-04-26 10:59:18",
        "InterviewState": "Completed",
        "Flight": "W6 2281",
        "Dest": "CRL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "107eea87-0ff6-4085-9240-a594e0b54bf1",
        "InterviewEndDate": "2023-04-26 11:17:06",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "75ac198b-06e8-4ad8-8763-7d84d550a2cf",
        "InterviewEndDate": "2023-04-26 11:22:31",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5a27edb8-0429-4e23-9d6f-fc35ce1cadb5",
        "InterviewEndDate": "2023-04-26 11:18:27",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "48300627-df01-47a9-8ad1-3370f2188fbf",
        "InterviewEndDate": "2023-04-26 11:19:00",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "160bae74-7504-41e0-ab72-01998a676037",
        "InterviewEndDate": "2023-04-26 11:20:27",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3aac3c63-3a35-48b0-825e-92da29885727",
        "InterviewEndDate": "2023-04-26 11:22:14",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b10f0912-6c9c-4465-8f84-d135735ea4a6",
        "InterviewEndDate": "2023-04-26 11:32:46",
        "InterviewState": "Completed",
        "Flight": "W6 2269",
        "Dest": "BSL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1b7ddebc-1510-4473-8679-c6bb35ad2290",
        "InterviewEndDate": "2023-04-26 14:48:56",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "19b588b7-8bef-4e7b-ad5b-3a7687743c60",
        "InterviewEndDate": "2023-04-26 14:44:17",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "129dfa92-4768-4507-a856-7bdabc049b70",
        "InterviewEndDate": "2023-04-26 14:42:36",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3a3742f7-ec44-4725-88c4-3cc672f00cd3",
        "InterviewEndDate": "2023-04-26 14:48:45",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3edb0612-0b2b-4e3f-be1e-0ba7020c85d0",
        "InterviewEndDate": "2023-04-26 15:03:02",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4e00b77a-0ea9-492b-9b4c-85650d6c4020",
        "InterviewEndDate": "2023-04-26 14:49:07",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e1b82313-9c37-4d62-9cd4-4a23ea02b16b",
        "InterviewEndDate": "2023-04-26 14:51:02",
        "InterviewState": "Completed",
        "Flight": "LH 1339",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ac13153a-6e3f-424b-a355-3a0df7572a89",
        "InterviewEndDate": "2023-04-26 16:40:05",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "da90146b-e656-4831-a138-ee636fc60608",
        "InterviewEndDate": "2023-04-26 16:37:36",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "80ac36da-2878-4771-80c2-01a7c814f6cb",
        "InterviewEndDate": "2023-04-26 16:35:44",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "91501f31-32dc-4826-a089-0e07fbdfbf1c",
        "InterviewEndDate": "2023-04-26 16:32:38",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7989ec4d-f8f6-435c-aa65-380475094850",
        "InterviewEndDate": "2023-04-26 16:23:56",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fb0ace2c-c3f9-403f-9cd3-b0e3c375b9a8",
        "InterviewEndDate": "2023-04-26 16:25:49",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7db4268a-3660-4ed1-bd12-8a1b815be2c1",
        "InterviewEndDate": "2023-04-26 16:25:20",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "899ef7b1-70b4-49dc-bbc9-9e6cb4052d3e",
        "InterviewEndDate": "2023-04-26 16:24:56",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f097202a-ce71-4010-ad51-905ec083b3f0",
        "InterviewEndDate": "2023-04-26 16:24:38",
        "InterviewState": "Completed",
        "Flight": "FR 4144",
        "Dest": "PRG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8bc7d31e-d8ce-40ae-a0c9-e2eb53940091",
        "InterviewEndDate": "2023-04-27 11:44:30",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1060bfb1-de4f-455b-91d5-bf2b70eccb7d",
        "InterviewEndDate": "2023-04-27 09:35:46",
        "InterviewState": "Completed",
        "Flight": "FR 8357",
        "Dest": "MAN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "23a9c04a-be19-4d8f-a8f2-76822e6187b8",
        "InterviewEndDate": "2023-04-27 09:35:29",
        "InterviewState": "Completed",
        "Flight": "FR 8357",
        "Dest": "MAN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "43a039c3-bf3c-48f7-8e21-85d9d7bcdc17",
        "InterviewEndDate": "2023-04-27 09:39:06",
        "InterviewState": "Completed",
        "Flight": "FR 8357",
        "Dest": "MAN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "aecc347a-9679-4f6f-9800-d930429ecd5f",
        "InterviewEndDate": "2023-04-27 09:35:47",
        "InterviewState": "Completed",
        "Flight": "FR 8357",
        "Dest": "MAN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d1e7b3b9-b481-4ec7-8e5e-a25a8c2e20ff",
        "InterviewEndDate": "2023-04-27 09:42:58",
        "InterviewState": "Completed",
        "Flight": "FR 8357",
        "Dest": "MAN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "49bb0972-2519-4626-a919-5e8affe56f02",
        "InterviewEndDate": "2023-04-27 11:02:15",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "318aaeaf-e6d2-4511-8e56-7759c4ef43be",
        "InterviewEndDate": "2023-04-27 11:05:27",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7baed801-e33b-450b-86fc-a2b33929e22c",
        "InterviewEndDate": "2023-04-27 11:02:08",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "aa4d2382-aa7d-4d0e-9071-3f1a34252305",
        "InterviewEndDate": "2023-04-27 11:05:43",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3627a5ad-de69-49c2-9e0f-ffbb057d733b",
        "InterviewEndDate": "2023-04-27 11:00:07",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "82114c90-76cd-4124-85be-7a43e3d4ccb4",
        "InterviewEndDate": "2023-04-27 11:37:59",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5cd4bdda-1317-497f-8cd7-1ff67e624851",
        "InterviewEndDate": "2023-04-27 11:39:03",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "130470cb-1ece-4cad-81af-d1b52d651a77",
        "InterviewEndDate": "2023-04-27 11:40:54",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "04b325b6-4af4-45a4-9cb8-f973ffd5055b",
        "InterviewEndDate": "2023-04-27 11:35:49",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0da68b8e-6257-4d3e-8850-ad672ccb92a3",
        "InterviewEndDate": "2023-04-27 11:35:02",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0a93d9d5-fce2-453e-9675-c3ddf7eeef61",
        "InterviewEndDate": "2023-04-27 11:43:04",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0ad6c6d8-b703-4d06-b6c1-8aefda83a0bd",
        "InterviewEndDate": "2023-04-27 11:48:36",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "03231f18-3d85-41dc-a67c-7d23ea77558c",
        "InterviewEndDate": "2023-04-28 09:26:32",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3ff49d32-4914-4017-8066-58df44ff1ef8",
        "InterviewEndDate": "2023-04-28 15:30:29",
        "InterviewState": "Completed",
        "Flight": "FR 1923",
        "Dest": "WMI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "53c6e611-3fa0-4e92-b1ed-763add3654bb",
        "InterviewEndDate": "2023-04-28 06:14:17",
        "InterviewState": "Completed",
        "Flight": "W6 2271",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "2144f2f2-ff12-4b83-ad9c-7f964bbfb38f",
        "InterviewEndDate": "2023-04-28 06:25:27",
        "InterviewState": "Completed",
        "Flight": "W6 2271",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "5d1dcbc9-deec-45d2-b8eb-5ddc65613a26",
        "InterviewEndDate": "2023-04-28 06:31:01",
        "InterviewState": "Completed",
        "Flight": "W6 2271",
        "Dest": "EIN",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "960a9102-c1a3-4852-9363-f8f7c2a2f7e3",
        "InterviewEndDate": "2023-04-29 16:49:16",
        "InterviewState": "Completed",
        "Flight": "FR 4277",
        "Dest": "SKG",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "5f7d4298-6bd0-42e2-a53d-78e88ca3044d",
        "InterviewEndDate": "2023-04-28 09:21:42",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "31778951-3b76-429e-9808-e82685480bdb",
        "InterviewEndDate": "2023-04-28 14:21:17",
        "InterviewState": "Completed",
        "Flight": "FR 5254",
        "Dest": "RMI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b2034ee5-1e99-4877-8f93-18b9280c67d5",
        "InterviewEndDate": "2023-04-28 15:33:43",
        "InterviewState": "Completed",
        "Flight": "FR 1923",
        "Dest": "WMI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f2ad2898-8b18-40dd-8e51-47998c68a14f",
        "InterviewEndDate": "2023-04-28 14:10:34",
        "InterviewState": "Completed",
        "Flight": "FR 5254",
        "Dest": "RMI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4f208eef-08d3-455d-bf55-b761d63c19df",
        "InterviewEndDate": "2023-04-28 14:18:32",
        "InterviewState": "Completed",
        "Flight": "FR 5254",
        "Dest": "RMI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d83d63a7-74ee-4243-b9f6-c4d4a319ee44",
        "InterviewEndDate": "2023-04-28 15:44:14",
        "InterviewState": "Completed",
        "Flight": "FR 1923",
        "Dest": "WMI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "30e2c716-9aec-46dc-b034-d508ba4aac3a",
        "InterviewEndDate": "2023-04-28 15:29:05",
        "InterviewState": "Completed",
        "Flight": "FR 1923",
        "Dest": "WMI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fccb42f6-c0d8-4e2b-aa4c-f108e92597ad",
        "InterviewEndDate": "2023-04-29 16:45:47",
        "InterviewState": "Completed",
        "Flight": "FR 4277",
        "Dest": "SKG",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "86e0c82a-dc02-4171-af49-1eb69a15fc13",
        "InterviewEndDate": "2023-04-29 16:45:48",
        "InterviewState": "Completed",
        "Flight": "FR 4277",
        "Dest": "SKG",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "7aecc80b-a8af-4a76-8a8f-762dc53168e4",
        "InterviewEndDate": "2023-04-29 17:56:20",
        "InterviewState": "Completed",
        "Flight": "LO  538",
        "Dest": "WAW",
        "AirlineCode": "LO",
        "InterviewerID": 9
    },
    {
        "InterviewId": "7f132e85-6193-42fa-98a8-971357037c00",
        "InterviewEndDate": "2023-04-30 17:41:43",
        "InterviewState": "Completed",
        "Flight": "LO  538",
        "Dest": "WAW",
        "AirlineCode": "LO",
        "InterviewerID": 9
    },
    {
        "InterviewId": "2fb7a84c-ba09-43ff-a6ce-756db888bd81",
        "InterviewEndDate": "2023-04-29 18:02:33",
        "InterviewState": "Completed",
        "Flight": "LO  538",
        "Dest": "WAW",
        "AirlineCode": "LO",
        "InterviewerID": 9
    },
    {
        "InterviewId": "aedfeb97-87b7-46ca-bc96-1cc29783be50",
        "InterviewEndDate": "2023-04-30 17:51:59",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 10
    },
    {
        "InterviewId": "1b2160e6-6621-4565-be32-136458a28109",
        "InterviewEndDate": "2023-04-30 17:59:48",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 10
    },
    {
        "InterviewId": "2e6160de-c08f-4cef-9624-92b9eea41551",
        "InterviewEndDate": "2023-04-30 17:59:04",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 10
    },
    {
        "InterviewId": "ca0b26bc-7198-4164-8aaf-267e499bf7f6",
        "InterviewEndDate": "2023-04-30 17:52:30",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 10
    },
    {
        "InterviewId": "95249dd0-fbd9-416f-a0f0-28e971983237",
        "InterviewEndDate": "2023-04-30 17:49:34",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 10
    },
    {
        "InterviewId": "8e02d9b3-becc-4121-a43d-6fc26b4c8bde",
        "InterviewEndDate": "2023-04-30 18:02:34",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 10
    },
    {
        "InterviewId": "e18b6662-6f15-45b9-a2b3-ce200c944cae",
        "InterviewEndDate": "2023-04-30 18:08:50",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 10
    },
    {
        "InterviewId": "be7674ec-d8f7-4c58-9e94-970e235f3680",
        "InterviewEndDate": "2023-05-15 10:16:32",
        "InterviewState": "Completed",
        "Flight": "FR 7604",
        "Dest": "Arn",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "e84cb5a9-feef-4e3c-96af-ae32dc70aa42",
        "InterviewEndDate": "2023-05-02 14:56:47",
        "InterviewState": "Completed",
        "Flight": "LX 2255",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 1
    },
    {
        "InterviewId": "201eb260-7729-4e15-8cf9-d3e2cb69e5ff",
        "InterviewEndDate": "2023-05-02 14:57:25",
        "InterviewState": "Completed",
        "Flight": "LX 2255",
        "Dest": "ZRH",
        "AirlineCode": "LX",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c8a3e49f-702d-4596-afe8-f4f7e4be36d3",
        "InterviewEndDate": "2023-05-06 14:12:27",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 1
    },
    {
        "InterviewId": "46997cfb-e433-4a29-92cd-ead7c607bda2",
        "InterviewEndDate": "2023-05-06 14:12:29",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 1
    },
    {
        "InterviewId": "247e0318-3888-4252-a002-1453829100d3",
        "InterviewEndDate": "2023-05-06 14:14:06",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 1
    },
    {
        "InterviewId": "dcd818a9-6907-4395-a854-2a693c6039f2",
        "InterviewEndDate": "2023-05-06 14:16:46",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7e3ae190-a745-40cd-bb3d-c3b4ba611b95",
        "InterviewEndDate": "2023-05-06 14:16:08",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 1
    },
    {
        "InterviewId": "832c0de3-90da-47c3-8661-b32e09bad1c2",
        "InterviewEndDate": "2023-05-11 11:02:14",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1d749813-915c-4d69-8872-d9c36b6af1d1",
        "InterviewEndDate": "2023-05-11 10:58:06",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "628e7ff8-e42b-4225-a9e8-1ec0ca005c90",
        "InterviewEndDate": "2023-05-11 10:58:12",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "14c1d51f-4bcb-4fe6-8893-ede1968d17b9",
        "InterviewEndDate": "2023-05-11 10:58:13",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "493d5a38-b438-4a6e-9b26-c48ea2138b2f",
        "InterviewEndDate": "2023-05-11 11:01:00",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c3e9fdba-9e27-454d-8bc6-49a9a2316cfb",
        "InterviewEndDate": "2023-05-11 14:49:17",
        "InterviewState": "Completed",
        "Flight": "KL 1976",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f7dddc71-142c-4012-b0e6-7b281a5e3fba",
        "InterviewEndDate": "2023-05-11 14:47:06",
        "InterviewState": "Completed",
        "Flight": "KL 1976",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fdf4d752-a0b3-4dd7-b8da-419d079143a1",
        "InterviewEndDate": "2023-05-11 14:42:17",
        "InterviewState": "Completed",
        "Flight": "KL 1976",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a1730cdd-f6ad-4779-8af8-1c47938ca465",
        "InterviewEndDate": "2023-05-11 14:40:24",
        "InterviewState": "Completed",
        "Flight": "KL 1976",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1311b03a-7688-4095-9bcf-709105abe266",
        "InterviewEndDate": "2023-05-11 14:47:32",
        "InterviewState": "Completed",
        "Flight": "KL 1976",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "265f8a55-351a-41cf-9cf3-81f25ddfe1d0",
        "InterviewEndDate": "2023-05-12 10:08:00",
        "InterviewState": "Completed",
        "Flight": "QR  202",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "e0ffd077-7c22-405d-92cc-05a738204502",
        "InterviewEndDate": "2023-05-12 10:10:23",
        "InterviewState": "Completed",
        "Flight": "QR  202",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "527169bd-bf44-47e8-81f0-475fb3c17bfb",
        "InterviewEndDate": "2023-05-12 10:10:36",
        "InterviewState": "Completed",
        "Flight": "QR  202",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "4efde90c-525b-4f72-8a7c-e263cfca38ba",
        "InterviewEndDate": "2023-05-12 10:10:34",
        "InterviewState": "Completed",
        "Flight": "QR  202",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "9ab6528a-fcaf-40f5-aeae-7f4c537a41b2",
        "InterviewEndDate": "2023-05-12 10:11:50",
        "InterviewState": "Completed",
        "Flight": "QR  202",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "881bcf40-4f4c-4af8-9620-14d783dd2383",
        "InterviewEndDate": "2023-05-12 10:22:34",
        "InterviewState": "Completed",
        "Flight": "QR  202",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "010a1488-a381-4614-883a-5ae8eaa5c87c",
        "InterviewEndDate": "2023-05-12 11:46:54",
        "InterviewState": "Completed",
        "Flight": "OS  714",
        "Dest": "VIE",
        "AirlineCode": "OS",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ead74fb6-c6c7-449f-926a-fd3f799e0e22",
        "InterviewEndDate": "2023-05-12 11:45:06",
        "InterviewState": "Completed",
        "Flight": "OS  714",
        "Dest": "VIE",
        "AirlineCode": "OS",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c6a45014-a20e-4f10-9d53-45d743c27efa",
        "InterviewEndDate": "2023-05-12 11:47:59",
        "InterviewState": "Completed",
        "Flight": "OS  714",
        "Dest": "VIE",
        "AirlineCode": "OS",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5ee28654-076e-475b-9cb6-b8e0c141be47",
        "InterviewEndDate": "2023-05-12 11:50:08",
        "InterviewState": "Completed",
        "Flight": "OS  714",
        "Dest": "VIE",
        "AirlineCode": "OS",
        "InterviewerID": 1
    },
    {
        "InterviewId": "77d34aa3-d8df-4495-a3e3-c682dda8127a",
        "InterviewEndDate": "2023-05-12 13:21:56",
        "InterviewState": "Completed",
        "Flight": "W6 2229",
        "Dest": "SKP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "72cc75b8-e6c8-4ffd-9d7a-8ca5d630c2e3",
        "InterviewEndDate": "2023-05-12 13:25:03",
        "InterviewState": "Completed",
        "Flight": "W6 2229",
        "Dest": "SKP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e80c926a-91c5-4a56-b9cd-d3df44a2deaf",
        "InterviewEndDate": "2023-05-12 13:25:27",
        "InterviewState": "Completed",
        "Flight": "W6 2229",
        "Dest": "SKP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "71772710-fc65-4ea9-b084-d0e3e57a71f5",
        "InterviewEndDate": "2023-05-12 14:12:23",
        "InterviewState": "Completed",
        "Flight": "FR 4247",
        "Dest": "BOH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4392395f-4014-4680-b4b2-8ab0e6f63518",
        "InterviewEndDate": "2023-05-12 14:14:09",
        "InterviewState": "Completed",
        "Flight": "FR 4247",
        "Dest": "BOH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a27b7f0f-320b-4ed6-ba7c-23785a5648b9",
        "InterviewEndDate": "2023-05-12 15:10:43",
        "InterviewState": "Completed",
        "Flight": "MS  752",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "InterviewerID": 1
    },
    {
        "InterviewId": "51021815-ef5e-4c38-bd42-bd88aa8fc04d",
        "InterviewEndDate": "2023-05-12 15:28:26",
        "InterviewState": "Completed",
        "Flight": "MS  752",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "InterviewerID": 1
    },
    {
        "InterviewId": "15e3a8ee-f0fe-47aa-8ddf-7feec0c7536c",
        "InterviewEndDate": "2023-05-12 15:49:04",
        "InterviewState": "Completed",
        "Flight": "MS  752",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "InterviewerID": 1
    },
    {
        "InterviewId": "494b5211-3c19-40c4-b29b-2f82bb5e8609",
        "InterviewEndDate": "2023-05-12 17:12:11",
        "InterviewState": "Completed",
        "Flight": "FR 3330",
        "Dest": "PFO",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3a37fe42-3b3d-48a1-a6a4-8e7da2931dbd",
        "InterviewEndDate": "2023-05-12 17:16:10",
        "InterviewState": "Completed",
        "Flight": "FR 3330",
        "Dest": "PFO",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0e93b2d5-51fa-4993-aa5f-f64927172295",
        "InterviewEndDate": "2023-05-13 06:37:16",
        "InterviewState": "Completed",
        "Flight": "W6 2447",
        "Dest": "SKG",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e4834b4f-8259-41f4-9cac-3ebefd98e16e",
        "InterviewEndDate": "2023-05-13 06:35:47",
        "InterviewState": "Completed",
        "Flight": "W6 2447",
        "Dest": "SKG",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d82ec82c-dc69-422e-848b-54a3f6cf221a",
        "InterviewEndDate": "2023-05-13 06:46:37",
        "InterviewState": "Completed",
        "Flight": "W6 2447",
        "Dest": "SKG",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4ca7ebfc-764f-4445-9bf2-d20ed23a6970",
        "InterviewEndDate": "2023-05-13 07:31:10",
        "InterviewState": "Completed",
        "Flight": "FR 2301",
        "Dest": "VLC",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8e51719b-1fbf-460f-9ead-fa21cd03d83c",
        "InterviewEndDate": "2023-05-13 07:30:25",
        "InterviewState": "Completed",
        "Flight": "FR 2301",
        "Dest": "VLC",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "00bcb261-ab30-4f93-b0ca-212374fe0ca7",
        "InterviewEndDate": "2023-05-13 10:09:22",
        "InterviewState": "Completed",
        "Flight": "FR 6712",
        "Dest": "MAD",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "830434d0-4287-4dbd-bb2d-ff13bbb912c5",
        "InterviewEndDate": "2023-05-13 10:30:33",
        "InterviewState": "Completed",
        "Flight": "FR 6712",
        "Dest": "MAD",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "9be06c3e-c974-4ecd-8050-9257665a6e8f",
        "InterviewEndDate": "2023-05-13 11:13:12",
        "InterviewState": "Completed",
        "Flight": "FR 4134",
        "Dest": "BRS",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c1bbb466-b13c-4fbc-8590-4aceda560a12",
        "InterviewEndDate": "2023-05-13 11:19:41",
        "InterviewState": "Completed",
        "Flight": "FR 4134",
        "Dest": "BRS",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9790819e-f472-478a-b2de-163202fedadc",
        "InterviewEndDate": "2023-05-13 11:22:05",
        "InterviewState": "Completed",
        "Flight": "FR 4134",
        "Dest": "BRS",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "14c77c32-377d-4b18-8461-1eda108e1818",
        "InterviewEndDate": "2023-05-13 12:44:58",
        "InterviewState": "Completed",
        "Flight": "EI  673",
        "Dest": "DUB",
        "AirlineCode": "EI",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4d5cc29f-581e-4ec7-bc42-cf67ec61f487",
        "InterviewEndDate": "2023-05-13 12:48:26",
        "InterviewState": "Completed",
        "Flight": "EI  673",
        "Dest": "DUB",
        "AirlineCode": "EI",
        "InterviewerID": 1
    },
    {
        "InterviewId": "44efdcb8-1bf4-4987-af21-b3318ddad6fd",
        "InterviewEndDate": "2023-05-13 12:47:27",
        "InterviewState": "Completed",
        "Flight": "EI  673",
        "Dest": "DUB",
        "AirlineCode": "EI",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1105d9e6-4077-4d41-b2a6-51fefaca885c",
        "InterviewEndDate": "2023-05-13 12:53:20",
        "InterviewState": "Completed",
        "Flight": "EI  673",
        "Dest": "DUB",
        "AirlineCode": "EI",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7616d655-04e0-4a5d-9efc-539fca3c6ae9",
        "InterviewEndDate": "2023-05-13 13:27:20",
        "InterviewState": "Completed",
        "Flight": "W6 2297",
        "Dest": "RUH",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "209b1399-54b0-4945-9ebd-5ace80e6395a",
        "InterviewEndDate": "2023-05-13 13:23:36",
        "InterviewState": "Completed",
        "Flight": "W6 2297",
        "Dest": "RUH",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "caee7b74-9826-4801-bfe9-07910e94cc9c",
        "InterviewEndDate": "2023-05-13 13:31:04",
        "InterviewState": "Completed",
        "Flight": "W6 2297",
        "Dest": "RUH",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "59383341-b13f-416f-8ae1-2db7137bc4d6",
        "InterviewEndDate": "2023-05-13 14:33:39",
        "InterviewState": "Completed",
        "Flight": "FR 3110",
        "Dest": "PMI",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "c3a63d06-d450-4866-8d74-e1e2998536d3",
        "InterviewEndDate": "2023-05-13 14:26:52",
        "InterviewState": "Completed",
        "Flight": "FR 3110",
        "Dest": "PMI",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "ca63e611-4781-4082-830a-f4b5bc08ec7d",
        "InterviewEndDate": "2023-05-13 14:13:24",
        "InterviewState": "Completed",
        "Flight": "FR 3110",
        "Dest": "PMI",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "60ddfff3-2671-417a-ac91-0285d379cb79",
        "InterviewEndDate": "2023-05-13 14:13:57",
        "InterviewState": "Completed",
        "Flight": "FR 3110",
        "Dest": "PMI",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "736d213b-0f12-436d-8681-790fc24dad28",
        "InterviewEndDate": "2023-05-13 14:26:50",
        "InterviewState": "Completed",
        "Flight": "FR 3110",
        "Dest": "PMI",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "0aced837-cfe0-4e57-9344-d07d2a22ee01",
        "InterviewEndDate": "2023-05-14 12:28:08",
        "InterviewState": "Completed",
        "Flight": "FR 2108",
        "Dest": "BGY",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "8e78442d-a358-4a01-8362-8593f920e985",
        "InterviewEndDate": "2023-05-14 12:42:09",
        "InterviewState": "Completed",
        "Flight": "FR 2108",
        "Dest": "BGY",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "3c7a83c1-198c-46ff-8a68-f6fcb00875f9",
        "InterviewEndDate": "2023-05-14 12:42:01",
        "InterviewState": "Completed",
        "Flight": "FR 2108",
        "Dest": "BGY",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "c06c90bc-7883-407a-9f6d-e33c2695f25c",
        "InterviewEndDate": "2023-05-14 12:36:53",
        "InterviewState": "Completed",
        "Flight": "FR 2108",
        "Dest": "BGY",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "e0f86394-2e34-49a0-bbd7-896a9c94f43f",
        "InterviewEndDate": "2023-05-14 12:40:57",
        "InterviewState": "Completed",
        "Flight": "FR 2108",
        "Dest": "BGY",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "a28d747d-63ca-43d5-bb1e-6abe63992828",
        "InterviewEndDate": "2023-05-25 21:40:28",
        "InterviewState": "Completed",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "92d46ef6-5229-4914-86e2-670bbbe704c2",
        "InterviewEndDate": "2023-05-14 14:22:08",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 1
    },
    {
        "InterviewId": "19108498-84d9-453e-b55a-2f1819792e21",
        "InterviewEndDate": "2023-05-14 14:19:49",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a610e422-1dae-4866-9d8c-e18f1ffb10a2",
        "InterviewEndDate": "2023-05-14 14:18:53",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 1
    },
    {
        "InterviewId": "96495cd6-34a3-4602-9b18-3ceba0cd8d4b",
        "InterviewEndDate": "2023-05-14 14:19:40",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3c84078d-d8cb-468c-ba51-ca479b29361e",
        "InterviewEndDate": "2023-05-14 14:34:03",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7c556e16-74e0-407f-9353-34e29b906d38",
        "InterviewEndDate": "2023-05-14 14:29:57",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6ff03ca1-c77b-4826-8723-864de762482e",
        "InterviewEndDate": "2023-05-14 14:42:14",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 1
    },
    {
        "InterviewId": "426c6385-af77-4ff9-bf1f-9b47eecf92b8",
        "InterviewEndDate": "2023-05-14 16:21:37",
        "InterviewState": "Completed",
        "Flight": "FR 5097",
        "Dest": "AMM",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "edf8b2ab-5ba7-4bea-9a9b-d0be33ecc5a1",
        "InterviewEndDate": "2023-05-14 16:24:47",
        "InterviewState": "Completed",
        "Flight": "FR 5097",
        "Dest": "AMM",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "38740c68-d4e3-45b3-89c6-6d3d5a1eea1a",
        "InterviewEndDate": "2023-05-14 18:25:47",
        "InterviewState": "Completed",
        "Flight": "SN 2826",
        "Dest": "BRU",
        "AirlineCode": "SN",
        "InterviewerID": 1
    },
    {
        "InterviewId": "aee886a2-724e-4d8f-89b2-7a9045d5f82f",
        "InterviewEndDate": "2023-05-14 18:29:07",
        "InterviewState": "Completed",
        "Flight": "SN 2826",
        "Dest": "BRU",
        "AirlineCode": "SN",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6d7b5e66-d804-4c00-b949-07c18d78ba74",
        "InterviewEndDate": "2023-05-14 18:37:19",
        "InterviewState": "Completed",
        "Flight": "SN 2826",
        "Dest": "BRU",
        "AirlineCode": "SN",
        "InterviewerID": 1
    },
    {
        "InterviewId": "59f1fad6-6d89-4b79-9049-9943a5884b3a",
        "InterviewEndDate": "2023-05-14 18:40:43",
        "InterviewState": "Completed",
        "Flight": "SN 2826",
        "Dest": "BRU",
        "AirlineCode": "SN",
        "InterviewerID": 1
    },
    {
        "InterviewId": "55c5d4c3-be99-47c6-bd0e-f22b22abd0f2",
        "InterviewEndDate": "2023-05-14 18:40:56",
        "InterviewState": "Completed",
        "Flight": "SN 2826",
        "Dest": "BRU",
        "AirlineCode": "SN",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5daa5254-33a8-4e0e-beb2-a42e66a178a0",
        "InterviewEndDate": "2023-05-14 18:40:01",
        "InterviewState": "Completed",
        "Flight": "SN 2826",
        "Dest": "BRU",
        "AirlineCode": "SN",
        "InterviewerID": 1
    },
    {
        "InterviewId": "11d86035-7471-4922-8321-14502d64ff16",
        "InterviewEndDate": "2023-05-14 18:41:31",
        "InterviewState": "Completed",
        "Flight": "SN 2826",
        "Dest": "BRU",
        "AirlineCode": "SN",
        "InterviewerID": 1
    },
    {
        "InterviewId": "261a6da4-d062-4144-9f2c-2d1abe8218f3",
        "InterviewEndDate": "2023-05-15 10:11:36",
        "InterviewState": "Completed",
        "Flight": "FR 7604",
        "Dest": "ARN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "bae2c757-f28b-4918-ab5a-a271a58bc344",
        "InterviewEndDate": "2023-05-15 10:05:22",
        "InterviewState": "Completed",
        "Flight": "FR 7604",
        "Dest": "ARN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "abbeeb71-76f7-4641-b250-e9f90da23717",
        "InterviewEndDate": "2023-05-15 10:09:23",
        "InterviewState": "Completed",
        "Flight": "FR 7604",
        "Dest": "ARN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "f8dba3e8-2f11-4ce0-8b4c-74696b33f5c9",
        "InterviewEndDate": "2023-05-15 10:11:57",
        "InterviewState": "Completed",
        "Flight": "FR 7604",
        "Dest": "ARN",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "8a8a7527-27cb-40eb-b676-7f95cdbfffd4",
        "InterviewEndDate": "2023-05-15 17:21:25",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "29eef25f-5a1f-40c6-9e35-4ab33ed3148b",
        "InterviewEndDate": "2023-05-15 17:34:05",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0b017347-2e34-4c97-8423-44b0274880b7",
        "InterviewEndDate": "2023-05-15 17:28:08",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9a000b6b-312a-4636-8235-18e0f6e28688",
        "InterviewEndDate": "2023-05-15 17:31:51",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "001ff1d2-eb6c-4fbd-96a3-95b1b2ea29a5",
        "InterviewEndDate": "2023-05-15 17:29:10",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a427e09f-e668-4ed5-b1a8-b8041b93e5d3",
        "InterviewEndDate": "2023-05-15 17:31:11",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c4e9b06c-2932-4208-b6a4-144f74482609",
        "InterviewEndDate": "2023-05-15 17:42:14",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "dda8926c-1df6-4cef-9aa8-57b152e23a49",
        "InterviewEndDate": "2023-05-15 17:41:37",
        "InterviewState": "Completed",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f5d0174a-633f-4f26-92c8-dc341a47b739",
        "InterviewEndDate": "2023-05-15 18:22:32",
        "InterviewState": "Completed",
        "Flight": "RO  238",
        "Dest": "OTP",
        "AirlineCode": "RO",
        "InterviewerID": 1
    },
    {
        "InterviewId": "080534a8-6d55-4bb8-a37d-ce44476e50f9",
        "InterviewEndDate": "2023-05-15 18:19:41",
        "InterviewState": "Completed",
        "Flight": "RO  238",
        "Dest": "OTP",
        "AirlineCode": "RO",
        "InterviewerID": 1
    },
    {
        "InterviewId": "db1c8f64-643b-4954-a9f3-e3be3d97f4fa",
        "InterviewEndDate": "2023-05-15 18:19:37",
        "InterviewState": "Completed",
        "Flight": "RO  238",
        "Dest": "OTP",
        "AirlineCode": "RO",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f57ac88a-9b03-46f9-9938-019d6099bf27",
        "InterviewEndDate": "2023-05-15 18:22:59",
        "InterviewState": "Completed",
        "Flight": "RO  238",
        "Dest": "OTP",
        "AirlineCode": "RO",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ac9706b3-c969-4cf5-9aef-080807b4f42d",
        "InterviewEndDate": "2023-05-15 18:21:12",
        "InterviewState": "Completed",
        "Flight": "RO  238",
        "Dest": "OTP",
        "AirlineCode": "RO",
        "InterviewerID": 1
    },
    {
        "InterviewId": "28ac1c0d-9934-4863-a627-f8b34d64b6fe",
        "InterviewEndDate": "2023-05-15 19:11:49",
        "InterviewState": "Completed",
        "Flight": "AY 1256",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 10
    },
    {
        "InterviewId": "58d00c4d-e054-4706-8e0d-09d23c56c319",
        "InterviewEndDate": "2023-05-15 19:15:31",
        "InterviewState": "Completed",
        "Flight": "AY 1256",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 10
    },
    {
        "InterviewId": "43b72c62-eee3-4c66-83e4-d3de8cbb6713",
        "InterviewEndDate": "2023-05-15 19:13:26",
        "InterviewState": "Completed",
        "Flight": "AY 1256",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 10
    },
    {
        "InterviewId": "0cd1ce01-ca41-4dbd-b851-4b94a700ef50",
        "InterviewEndDate": "2023-05-15 19:11:47",
        "InterviewState": "Completed",
        "Flight": "AY 1256",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 10
    },
    {
        "InterviewId": "52d726ad-6164-45fe-878f-264e8604e571",
        "InterviewEndDate": "2023-05-15 19:13:57",
        "InterviewState": "Completed",
        "Flight": "AY 1256",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 10
    },
    {
        "InterviewId": "fa86edba-8999-4b17-a19d-a4e4c341f388",
        "InterviewEndDate": "2023-05-15 19:25:21",
        "InterviewState": "Completed",
        "Flight": "AY 1256",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 10
    },
    {
        "InterviewId": "b792a52a-aa07-4a6d-b7e3-06d1bc60bd07",
        "InterviewEndDate": "2023-05-15 19:23:19",
        "InterviewState": "Completed",
        "Flight": "AY 1256",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 10
    },
    {
        "InterviewId": "ac137269-f6bd-4552-9799-b75c7529e091",
        "InterviewEndDate": "2023-05-15 19:22:38",
        "InterviewState": "Completed",
        "Flight": "AY 1256",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 10
    },
    {
        "InterviewId": "cbe42bb0-e28a-4ac4-b00b-32a6dc8a7ba8",
        "InterviewEndDate": "2023-05-15 19:28:48",
        "InterviewState": "Completed",
        "Flight": "AY 1256",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 10
    },
    {
        "InterviewId": "b98e7ca9-1bc0-4add-8c89-4e1e6e0fd149",
        "InterviewEndDate": "2023-05-15 19:27:17",
        "InterviewState": "Completed",
        "Flight": "AY 1256",
        "Dest": "HEL",
        "AirlineCode": "AY",
        "InterviewerID": 10
    },
    {
        "InterviewId": "f982c18b-b286-4b82-a077-5e6237da3040",
        "InterviewEndDate": "2023-05-15 20:19:06",
        "InterviewState": "Completed",
        "Flight": "KE  962",
        "Dest": "ICN",
        "AirlineCode": "KE",
        "InterviewerID": 1
    },
    {
        "InterviewId": "11714e2f-c7d7-484d-8545-e454ce66853d",
        "InterviewEndDate": "2023-05-15 20:47:47",
        "InterviewState": "Completed",
        "Flight": "KE  962",
        "Dest": "ICN",
        "AirlineCode": "KE",
        "InterviewerID": 1
    },
    {
        "InterviewId": "bdecd5f4-f870-4f3d-a982-3823c826ff0e",
        "InterviewEndDate": "2023-05-15 20:18:00",
        "InterviewState": "Completed",
        "Flight": "KE  962",
        "Dest": "ICN",
        "AirlineCode": "KE",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2e9f2d49-3991-461d-bd89-bdb6b897ac24",
        "InterviewEndDate": "2023-05-15 20:16:09",
        "InterviewState": "Completed",
        "Flight": "KE  962",
        "Dest": "ICN",
        "AirlineCode": "KE",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7a6ee998-c07b-418c-9892-d32175fb952f",
        "InterviewEndDate": "2023-05-15 20:26:39",
        "InterviewState": "Completed",
        "Flight": "KE  962",
        "Dest": "ICN",
        "AirlineCode": "KE",
        "InterviewerID": 1
    },
    {
        "InterviewId": "51ce1cfb-9384-43df-af6f-f8ab2da85a85",
        "InterviewEndDate": "2023-05-15 21:05:11",
        "InterviewState": "Completed",
        "Flight": "LS  898",
        "Dest": "MAN",
        "AirlineCode": "LS",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9d24a047-63f8-4954-bea1-2a5e3f1050b8",
        "InterviewEndDate": "2023-05-15 21:01:13",
        "InterviewState": "Completed",
        "Flight": "LS  898",
        "Dest": "MAN",
        "AirlineCode": "LS",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2774d5c0-013a-48bc-9947-521692da86a9",
        "InterviewEndDate": "2023-05-15 21:03:26",
        "InterviewState": "Completed",
        "Flight": "LS  898",
        "Dest": "MAN",
        "AirlineCode": "LS",
        "InterviewerID": 1
    },
    {
        "InterviewId": "adc352f1-18bc-4b14-81b5-8b22d98583b9",
        "InterviewEndDate": "2023-05-15 21:06:11",
        "InterviewState": "Completed",
        "Flight": "LS  898",
        "Dest": "MAN",
        "AirlineCode": "LS",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6f6837a2-2802-43db-8fd5-643350d962ca",
        "InterviewEndDate": "2023-05-15 21:07:30",
        "InterviewState": "Completed",
        "Flight": "LS  898",
        "Dest": "MAN",
        "AirlineCode": "LS",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c4af3532-492e-45af-abb4-0ee5553f7769",
        "InterviewEndDate": "2023-05-15 21:31:00",
        "InterviewState": "Completed",
        "Flight": "FR  221",
        "Dest": "EMA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "00e4bc61-a2f3-4ab8-b18d-25a8a3a4e129",
        "InterviewEndDate": "2023-05-15 21:37:19",
        "InterviewState": "Completed",
        "Flight": "FR  221",
        "Dest": "EMA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "71cd7d14-9254-44f5-ae72-2ac6bfb18194",
        "InterviewEndDate": "2023-05-16 14:08:34",
        "InterviewState": "Completed",
        "Flight": "FR  839",
        "Dest": "TLV",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "387d34d6-0d3d-4c08-a604-450c12922683",
        "InterviewEndDate": "2023-05-16 14:05:48",
        "InterviewState": "Completed",
        "Flight": "FR  839",
        "Dest": "TLV",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "3838b710-1801-46f4-aeb1-b90e4a211fc5",
        "InterviewEndDate": "2023-05-16 14:08:37",
        "InterviewState": "Completed",
        "Flight": "FR  839",
        "Dest": "TLV",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "b0b835ce-07bf-483d-a7b4-e7e1676ffb7f",
        "InterviewEndDate": "2023-05-16 14:13:49",
        "InterviewState": "Completed",
        "Flight": "FR  839",
        "Dest": "TLV",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "11550cf0-8fec-4ce1-bdfb-ced743ef5f4a",
        "InterviewEndDate": "2023-05-16 14:16:25",
        "InterviewState": "Completed",
        "Flight": "FR  839",
        "Dest": "TLV",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "db211d30-310c-4a3a-9743-dd8c8037a7c7",
        "InterviewEndDate": "2023-05-16 14:09:45",
        "InterviewState": "Completed",
        "Flight": "FR  839",
        "Dest": "TLV",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "cad83262-7bba-44a0-abb5-c2370d9b7301",
        "InterviewEndDate": "2023-05-16 14:11:40",
        "InterviewState": "Completed",
        "Flight": "FR  839",
        "Dest": "TLV",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "26ce779d-3e9b-4f4e-8d04-00543fa56790",
        "InterviewEndDate": "2023-05-16 14:18:21",
        "InterviewState": "Completed",
        "Flight": "FR  839",
        "Dest": "TLV",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "d8e71d54-1f49-4128-b7e6-4975b710d16e",
        "InterviewEndDate": "2023-05-16 17:47:06",
        "InterviewState": "Completed",
        "Flight": "LO  538",
        "Dest": "WAW",
        "AirlineCode": "LO",
        "InterviewerID": 7
    },
    {
        "InterviewId": "5c10de46-9b24-45ae-940b-04794065e9e2",
        "InterviewEndDate": "2023-05-16 17:50:00",
        "InterviewState": "Completed",
        "Flight": "LO  538",
        "Dest": "WAW",
        "AirlineCode": "LO",
        "InterviewerID": 7
    },
    {
        "InterviewId": "4d39557f-4496-49d2-8ab0-d691daa9e734",
        "InterviewEndDate": "2023-05-16 17:49:17",
        "InterviewState": "Completed",
        "Flight": "LO  538",
        "Dest": "WAW",
        "AirlineCode": "LO",
        "InterviewerID": 7
    },
    {
        "InterviewId": "28b28116-d957-4e54-aaf1-f8e9e779e18d",
        "InterviewEndDate": "2023-05-16 17:52:35",
        "InterviewState": "Completed",
        "Flight": "LO  538",
        "Dest": "WAW",
        "AirlineCode": "LO",
        "InterviewerID": 7
    },
    {
        "InterviewId": "ed739b8f-39c2-4967-b70f-0dfe1fb96a6a",
        "InterviewEndDate": "2023-05-16 17:54:36",
        "InterviewState": "Completed",
        "Flight": "LO  538",
        "Dest": "WAW",
        "AirlineCode": "LO",
        "InterviewerID": 7
    },
    {
        "InterviewId": "80c662ab-813b-4b3b-b627-c0fb6fb8ed49",
        "InterviewEndDate": "2023-05-16 17:55:05",
        "InterviewState": "Completed",
        "Flight": "LO  538",
        "Dest": "WAW",
        "AirlineCode": "LO",
        "InterviewerID": 7
    },
    {
        "InterviewId": "dc58c243-cb40-4582-bbb5-faa264ffe43a",
        "InterviewEndDate": "2023-05-17 13:13:46",
        "InterviewState": "Completed",
        "Flight": "W6 2357",
        "Dest": "DXB",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a648e231-74aa-45ed-83ed-45bb567052ed",
        "InterviewEndDate": "2023-05-17 13:22:38",
        "InterviewState": "Completed",
        "Flight": "W6 2357",
        "Dest": "DXB",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c66c26c7-ad37-4da5-8c68-959a47b15e8d",
        "InterviewEndDate": "2023-05-17 13:16:50",
        "InterviewState": "Completed",
        "Flight": "W6 2357",
        "Dest": "DXB",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "46539398-3f8d-4f40-9a67-bb56a55f1ca9",
        "InterviewEndDate": "2023-05-17 13:18:10",
        "InterviewState": "Completed",
        "Flight": "W6 2357",
        "Dest": "DXB",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "80dde4d4-2dcb-49a5-b45a-817f92ded76b",
        "InterviewEndDate": "2023-05-17 13:58:43",
        "InterviewState": "Completed",
        "Flight": "TK 1034",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e87c2878-b959-4faf-b2e4-9969069bcabd",
        "InterviewEndDate": "2023-05-17 14:02:17",
        "InterviewState": "Completed",
        "Flight": "TK 1034",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a55827f3-61ee-4c7e-8305-e5430f43deb4",
        "InterviewEndDate": "2023-05-17 14:03:43",
        "InterviewState": "Completed",
        "Flight": "TK 1034",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7869d353-1d0a-4cb6-b093-1aa45131634e",
        "InterviewEndDate": "2023-05-17 14:17:43",
        "InterviewState": "Completed",
        "Flight": "TK 1034",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a3ec5dc6-63a6-4001-916e-0698277ae3a3",
        "InterviewEndDate": "2023-05-17 14:01:27",
        "InterviewState": "Completed",
        "Flight": "TK 1034",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d8309f21-708a-44d8-b9e8-26e2ac8c237c",
        "InterviewEndDate": "2023-05-17 14:15:59",
        "InterviewState": "Completed",
        "Flight": "TK 1034",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "094c6a87-23b9-4491-b32d-fb8a4a89b343",
        "InterviewEndDate": "2023-05-17 14:23:48",
        "InterviewState": "Completed",
        "Flight": "TK 1034",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7a528318-d158-476a-8ea3-542040a4b461",
        "InterviewEndDate": "2023-05-17 14:21:44",
        "InterviewState": "Completed",
        "Flight": "TK 1034",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7ed23b31-2b63-40c3-a9a7-86c816ff5436",
        "InterviewEndDate": "2023-05-17 14:17:55",
        "InterviewState": "Completed",
        "Flight": "TK 1034",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "42e25f82-ed35-48f8-9813-9eae628c7d55",
        "InterviewEndDate": "2023-05-17 14:25:53",
        "InterviewState": "Completed",
        "Flight": "TK 1034",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c3888383-79ab-4666-a1cc-5f2dd49e5ee8",
        "InterviewEndDate": "2023-05-17 14:39:40",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f2387b38-7b4b-4d72-bf8b-3dc64db87673",
        "InterviewEndDate": "2023-05-17 14:43:03",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 1
    },
    {
        "InterviewId": "77ef87ef-f8c1-4cfa-b2dc-be19422cb863",
        "InterviewEndDate": "2023-05-17 14:42:18",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2afce9cd-cdff-4c4e-a128-2669f9e70e14",
        "InterviewEndDate": "2023-05-17 14:41:21",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 1
    },
    {
        "InterviewId": "51a377ce-206b-436c-b3a8-768816197beb",
        "InterviewEndDate": "2023-05-17 14:41:40",
        "InterviewState": "Completed",
        "Flight": "BA  869",
        "Dest": "LHR",
        "AirlineCode": "BA",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8db469c2-cb3f-473f-8a1e-03845266c1b1",
        "InterviewEndDate": "2023-05-17 16:04:34",
        "InterviewState": "Completed",
        "Flight": "EK  112",
        "Dest": "DXB",
        "AirlineCode": "EK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "18777daa-5020-4bef-810f-f082d777a85c",
        "InterviewEndDate": "2023-05-17 15:58:20",
        "InterviewState": "Completed",
        "Flight": "EK  112",
        "Dest": "DXB",
        "AirlineCode": "EK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4a420e9f-8788-4af7-bace-c674f5531b63",
        "InterviewEndDate": "2023-05-17 16:07:52",
        "InterviewState": "Completed",
        "Flight": "EK  112",
        "Dest": "DXB",
        "AirlineCode": "EK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "aef4b6a9-26ba-4024-85f5-2dd6acf81c2a",
        "InterviewEndDate": "2023-05-17 16:06:41",
        "InterviewState": "Completed",
        "Flight": "EK  112",
        "Dest": "DXB",
        "AirlineCode": "EK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c38303ad-7e06-4437-afad-1ac3af6c2d3f",
        "InterviewEndDate": "2023-05-17 16:07:01",
        "InterviewState": "Completed",
        "Flight": "EK  112",
        "Dest": "DXB",
        "AirlineCode": "EK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e7b4b9f9-cf06-4862-9119-480e666fa5cf",
        "InterviewEndDate": "2023-05-17 16:19:15",
        "InterviewState": "Completed",
        "Flight": "EK  112",
        "Dest": "DXB",
        "AirlineCode": "EK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b40fcb45-0ab7-402e-9d03-25bd62d96a09",
        "InterviewEndDate": "2023-05-17 16:14:53",
        "InterviewState": "Completed",
        "Flight": "EK  112",
        "Dest": "DXB",
        "AirlineCode": "EK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "11f3dcc6-67db-4e83-a0b3-670cbd061e49",
        "InterviewEndDate": "2023-05-17 16:21:51",
        "InterviewState": "Completed",
        "Flight": "EK  112",
        "Dest": "DXB",
        "AirlineCode": "EK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "424c1d60-a960-4682-8b50-5b3e745cca81",
        "InterviewEndDate": "2023-05-17 16:18:13",
        "InterviewState": "Completed",
        "Flight": "EK  112",
        "Dest": "DXB",
        "AirlineCode": "EK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1b6f7208-22a2-48b0-afed-699169628f23",
        "InterviewEndDate": "2023-05-17 16:59:54",
        "InterviewState": "Completed",
        "Flight": "OS  722",
        "Dest": "VIE",
        "AirlineCode": "OS",
        "InterviewerID": 7
    },
    {
        "InterviewId": "850cbea7-e312-431c-9f5f-0cd255160c13",
        "InterviewEndDate": "2023-05-17 17:00:27",
        "InterviewState": "Completed",
        "Flight": "OS  722",
        "Dest": "VIE",
        "AirlineCode": "OS",
        "InterviewerID": 7
    },
    {
        "InterviewId": "a6b217c1-5fa9-44a5-a655-d0219ac7a623",
        "InterviewEndDate": "2023-05-17 17:01:09",
        "InterviewState": "Completed",
        "Flight": "OS  722",
        "Dest": "VIE",
        "AirlineCode": "OS",
        "InterviewerID": 7
    },
    {
        "InterviewId": "18de6531-81ff-4db8-bb36-5353a76f80b1",
        "InterviewEndDate": "2023-05-17 17:02:35",
        "InterviewState": "Completed",
        "Flight": "OS  722",
        "Dest": "VIE",
        "AirlineCode": "OS",
        "InterviewerID": 7
    },
    {
        "InterviewId": "c87b3394-0666-4ddd-87ac-7e8c73a5b209",
        "InterviewEndDate": "2023-05-17 16:57:58",
        "InterviewState": "Completed",
        "Flight": "OS  722",
        "Dest": "VIE",
        "AirlineCode": "OS",
        "InterviewerID": 7
    },
    {
        "InterviewId": "4baa50f8-f858-4fcd-9f03-3487b46e9784",
        "InterviewEndDate": "2023-05-17 17:11:49",
        "InterviewState": "Completed",
        "Flight": "OS  722",
        "Dest": "VIE",
        "AirlineCode": "OS",
        "InterviewerID": 7
    },
    {
        "InterviewId": "61f88036-c5cd-41bc-84c7-aa0fb3bdff8b",
        "InterviewEndDate": "2023-05-17 17:06:12",
        "InterviewState": "Completed",
        "Flight": "OS  722",
        "Dest": "VIE",
        "AirlineCode": "OS",
        "InterviewerID": 7
    },
    {
        "InterviewId": "262ef0bd-3a34-46ca-834f-013ad1513719",
        "InterviewEndDate": "2023-05-17 17:09:59",
        "InterviewState": "Completed",
        "Flight": "OS  722",
        "Dest": "VIE",
        "AirlineCode": "OS",
        "InterviewerID": 7
    },
    {
        "InterviewId": "4cfd854e-9224-41cd-b228-559e50120507",
        "InterviewEndDate": "2023-05-17 17:14:48",
        "InterviewState": "Completed",
        "Flight": "OS  722",
        "Dest": "VIE",
        "AirlineCode": "OS",
        "InterviewerID": 7
    },
    {
        "InterviewId": "239a6a77-ac05-4f82-8a32-5c27a42c6b4d",
        "InterviewEndDate": "2023-05-17 17:08:48",
        "InterviewState": "Completed",
        "Flight": "OS  722",
        "Dest": "VIE",
        "AirlineCode": "OS",
        "InterviewerID": 7
    },
    {
        "InterviewId": "e4441749-84f5-4533-9294-860381183487",
        "InterviewEndDate": "2023-05-18 10:31:20",
        "InterviewState": "Completed",
        "Flight": "LY 2366",
        "Dest": "TLV",
        "AirlineCode": "LY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c9baba25-dc3e-4d93-ab29-40aa6cceca4b",
        "InterviewEndDate": "2023-05-18 10:30:56",
        "InterviewState": "Completed",
        "Flight": "LY 2366",
        "Dest": "TLV",
        "AirlineCode": "LY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3469c4be-11b1-41fd-9787-8b9684aa89ba",
        "InterviewEndDate": "2023-05-18 10:29:09",
        "InterviewState": "Completed",
        "Flight": "LY 2366",
        "Dest": "TLV",
        "AirlineCode": "LY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2343b20c-74c4-4df4-aaed-46d422e01e8b",
        "InterviewEndDate": "2023-05-18 10:26:35",
        "InterviewState": "Completed",
        "Flight": "LY 2366",
        "Dest": "TLV",
        "AirlineCode": "LY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f47fa793-43bf-4754-9779-23a283c41eb1",
        "InterviewEndDate": "2023-05-18 10:25:14",
        "InterviewState": "Completed",
        "Flight": "LY 2366",
        "Dest": "TLV",
        "AirlineCode": "LY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "99399f10-75bc-473f-88ee-b62b06d21b0e",
        "InterviewEndDate": "2023-05-18 12:22:16",
        "InterviewState": "Completed",
        "Flight": "FR 4271",
        "Dest": "POZ",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b3d8e8f3-6bd4-4d0b-a781-6f454a078391",
        "InterviewEndDate": "2023-05-18 12:26:44",
        "InterviewState": "Completed",
        "Flight": "FR 4271",
        "Dest": "POZ",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c13ff6d1-b968-4af6-9aaa-d4053bd49a38",
        "InterviewEndDate": "2023-05-18 12:22:42",
        "InterviewState": "Completed",
        "Flight": "FR 4271",
        "Dest": "POZ",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "18830b3b-b998-4e39-b8cf-8936f191af89",
        "InterviewEndDate": "2023-05-18 12:34:50",
        "InterviewState": "Completed",
        "Flight": "FR 4271",
        "Dest": "POZ",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f30bae5e-a2a7-460f-9444-b7ab1c328c25",
        "InterviewEndDate": "2023-05-18 12:28:50",
        "InterviewState": "Completed",
        "Flight": "FR 4271",
        "Dest": "POZ",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "dbb22c8a-2106-4cad-b9d9-ac4349914aed",
        "InterviewEndDate": "2023-05-18 13:01:51",
        "InterviewState": "Completed",
        "Flight": "FR  605",
        "Dest": "CPH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4cf6fb8d-43d6-4eb3-be94-eb228e77b42b",
        "InterviewEndDate": "2023-05-18 13:02:07",
        "InterviewState": "Completed",
        "Flight": "FR  605",
        "Dest": "CPH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "45926d7b-f706-4897-80d0-37d2831eb235",
        "InterviewEndDate": "2023-05-18 13:02:11",
        "InterviewState": "Completed",
        "Flight": "FR  605",
        "Dest": "CPH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f1c5a238-c5c5-4d14-aa39-314e5931c60d",
        "InterviewEndDate": "2023-05-18 13:01:03",
        "InterviewState": "Completed",
        "Flight": "FR  605",
        "Dest": "CPH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ed365c89-168a-4183-ad22-d11725c040c6",
        "InterviewEndDate": "2023-05-18 13:04:19",
        "InterviewState": "Completed",
        "Flight": "FR  605",
        "Dest": "CPH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "37c6ef89-21ac-49e1-bc01-1e70fbc52a83",
        "InterviewEndDate": "2023-05-18 13:09:57",
        "InterviewState": "Completed",
        "Flight": "FR  605",
        "Dest": "CPH",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4b9a745b-8781-407f-9563-5bfafce19fdc",
        "InterviewEndDate": "2023-05-19 13:33:33",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 9
    },
    {
        "InterviewId": "6d0f1d19-bcd8-42f7-b5be-638109b0528f",
        "InterviewEndDate": "2023-05-19 13:29:22",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 9
    },
    {
        "InterviewId": "1aee5fda-219a-4b8e-a63f-2b2919d0f1f8",
        "InterviewEndDate": "2023-05-19 13:32:03",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 9
    },
    {
        "InterviewId": "26a6b72c-24a6-44f9-9352-5f8d0f8a1a9a",
        "InterviewEndDate": "2023-05-19 13:29:56",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 9
    },
    {
        "InterviewId": "55f266f6-f907-4d65-997a-0e3ea2608db1",
        "InterviewEndDate": "2023-05-19 13:31:47",
        "InterviewState": "Completed",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "InterviewerID": 9
    },
    {
        "InterviewId": "f44eac0b-b439-4702-a78c-bf620b5739b8",
        "InterviewEndDate": "2023-05-20 10:43:46",
        "InterviewState": "Completed",
        "Flight": "FR 4263",
        "Dest": "CRL",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "58345111-eee0-4c30-bce0-84c0e6fedee8",
        "InterviewEndDate": "2023-05-20 10:38:30",
        "InterviewState": "Completed",
        "Flight": "FR 4263",
        "Dest": "CRL",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "b7e47aef-3748-4b35-b9ce-18baa6ce5d72",
        "InterviewEndDate": "2023-05-20 10:38:31",
        "InterviewState": "Completed",
        "Flight": "FR 4263",
        "Dest": "CRL",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "423c3070-701c-4a02-a5aa-f9d32bf3c107",
        "InterviewEndDate": "2023-05-20 10:39:46",
        "InterviewState": "Completed",
        "Flight": "FR 4263",
        "Dest": "CRL",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "5c9b0d68-0539-4240-893b-04a13c2a3b1d",
        "InterviewEndDate": "2023-05-20 10:42:49",
        "InterviewState": "Completed",
        "Flight": "FR 4263",
        "Dest": "CRL",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "7e949c4e-3319-404d-935a-e5c5f4c094eb",
        "InterviewEndDate": "2023-05-20 17:25:42",
        "InterviewState": "Completed",
        "Flight": "W6 2207",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "ebb03a0e-9fda-425a-8e77-b23d363362b1",
        "InterviewEndDate": "2023-05-20 17:30:34",
        "InterviewState": "Completed",
        "Flight": "W6 2207",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "35615fc6-1359-4b39-9225-fb5b55d6616d",
        "InterviewEndDate": "2023-05-20 17:21:29",
        "InterviewState": "Completed",
        "Flight": "W6 2207",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "e1afe1f3-d9d5-4f02-be3f-513d7f35e426",
        "InterviewEndDate": "2023-05-20 17:29:34",
        "InterviewState": "Completed",
        "Flight": "W6 2207",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "becd88a4-0399-4dbb-b75c-456dc12cdef8",
        "InterviewEndDate": "2023-05-20 17:33:18",
        "InterviewState": "Completed",
        "Flight": "W6 2207",
        "Dest": "LTN",
        "AirlineCode": "W6",
        "InterviewerID": 9
    },
    {
        "InterviewId": "8f3a4e8d-82d2-466f-93f9-61fe262523ad",
        "InterviewEndDate": "2023-05-21 14:45:57",
        "InterviewState": "Completed",
        "Flight": "TK 7747",
        "Dest": "SAW",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6fd76aef-5961-40a1-bbdf-500b1719546f",
        "InterviewEndDate": "2023-05-21 14:45:51",
        "InterviewState": "Completed",
        "Flight": "TK 7747",
        "Dest": "SAW",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fa20191f-3714-4efb-b6ab-72d2e8d262c7",
        "InterviewEndDate": "2023-05-21 16:10:54",
        "InterviewState": "Completed",
        "Flight": "FR 1018",
        "Dest": "EDI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4bd988f6-0ee4-411b-b2ef-12fc7817bee4",
        "InterviewEndDate": "2023-05-21 16:09:21",
        "InterviewState": "Completed",
        "Flight": "FR 1018",
        "Dest": "EDI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "717d308d-4bca-4f97-b034-0e789a0ab8da",
        "InterviewEndDate": "2023-05-21 16:09:55",
        "InterviewState": "Completed",
        "Flight": "FR 1018",
        "Dest": "EDI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d0ec9f51-fab2-49bc-b056-b0a3cd4a9bb7",
        "InterviewEndDate": "2023-05-21 16:08:14",
        "InterviewState": "Completed",
        "Flight": "FR 1018",
        "Dest": "EDI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cdf2dce8-de75-457d-9426-33470abfd44d",
        "InterviewEndDate": "2023-05-21 16:10:36",
        "InterviewState": "Completed",
        "Flight": "FR 1018",
        "Dest": "EDI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "bf13ccc0-1ab5-4ab6-8a9e-b4da1019f4ba",
        "InterviewEndDate": "2023-05-21 16:18:36",
        "InterviewState": "Completed",
        "Flight": "FR 1018",
        "Dest": "EDI",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c518761f-1c0e-46ee-be8c-f4e2eeb1e6d6",
        "InterviewEndDate": "2023-05-21 16:53:04",
        "InterviewState": "Completed",
        "Flight": "FR 1024",
        "Dest": "DUB",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e940f958-90ed-4559-989f-90a9846bc4aa",
        "InterviewEndDate": "2023-05-21 16:51:50",
        "InterviewState": "Completed",
        "Flight": "FR 1024",
        "Dest": "DUB",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4ac9e550-2162-49d6-8f7b-ed2c6445a2f0",
        "InterviewEndDate": "2023-05-21 16:47:07",
        "InterviewState": "Completed",
        "Flight": "FR 1024",
        "Dest": "DUB",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cb5fe506-b981-4d88-a265-6fe3834058d8",
        "InterviewEndDate": "2023-05-21 16:51:53",
        "InterviewState": "Completed",
        "Flight": "FR 1024",
        "Dest": "DUB",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "003544fc-7f0d-451a-ab80-e7f66132fb44",
        "InterviewEndDate": "2023-05-21 16:49:53",
        "InterviewState": "Completed",
        "Flight": "FR 1024",
        "Dest": "DUB",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9442c99e-bca8-4ebe-b2bc-66035dc72084",
        "InterviewEndDate": "2023-05-21 17:00:01",
        "InterviewState": "Completed",
        "Flight": "FR 1024",
        "Dest": "DUB",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b018e9e2-c4dc-446f-bf51-b01a8e33dc66",
        "InterviewEndDate": "2023-05-21 17:07:05",
        "InterviewState": "Completed",
        "Flight": "FR 1024",
        "Dest": "DUB",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "02b42419-3cc7-4abf-883d-b8a7c28703ad",
        "InterviewEndDate": "2023-05-21 17:09:42",
        "InterviewState": "Completed",
        "Flight": "FR 1024",
        "Dest": "DUB",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "dea96ffe-d4da-4641-a053-7c2f8fd096ec",
        "InterviewEndDate": "2023-05-21 18:48:28",
        "InterviewState": "Completed",
        "Flight": "BZ  441",
        "Dest": "TLV",
        "AirlineCode": "BZ",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fefdc7aa-eeff-458e-8571-19bc568c0db8",
        "InterviewEndDate": "2023-05-21 18:51:11",
        "InterviewState": "Completed",
        "Flight": "BZ  441",
        "Dest": "TLV",
        "AirlineCode": "BZ",
        "InterviewerID": 1
    },
    {
        "InterviewId": "010c2146-0821-4fc9-b641-6846839b0160",
        "InterviewEndDate": "2023-05-21 18:48:47",
        "InterviewState": "Completed",
        "Flight": "BZ  441",
        "Dest": "TLV",
        "AirlineCode": "BZ",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ba37b502-3d70-455e-8414-7bade46132a2",
        "InterviewEndDate": "2023-05-21 18:48:45",
        "InterviewState": "Completed",
        "Flight": "BZ  441",
        "Dest": "TLV",
        "AirlineCode": "BZ",
        "InterviewerID": 1
    },
    {
        "InterviewId": "eb75ac6e-fef9-44f5-9c11-affd485881f0",
        "InterviewEndDate": "2023-05-21 19:29:55",
        "InterviewState": "Completed",
        "Flight": "W6 2211",
        "Dest": "LPL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9b974883-9f31-4a1f-a820-58fb58f5c7e1",
        "InterviewEndDate": "2023-05-21 19:35:55",
        "InterviewState": "Completed",
        "Flight": "W6 2211",
        "Dest": "LPL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9f7eb87c-653c-409d-9ec4-df4c607905e6",
        "InterviewEndDate": "2023-05-21 19:35:58",
        "InterviewState": "Completed",
        "Flight": "W6 2211",
        "Dest": "LPL",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "11ba5f60-b21e-459e-9a5c-fb63ad4fd672",
        "InterviewEndDate": "2023-05-22 18:11:04",
        "InterviewState": "Completed",
        "Flight": "SN 2826",
        "Dest": "BRU",
        "AirlineCode": "SN",
        "InterviewerID": 7
    },
    {
        "InterviewId": "27ce6f10-aa68-476a-a13f-baadbdff6afe",
        "InterviewEndDate": "2023-05-22 18:12:15",
        "InterviewState": "Completed",
        "Flight": "SN 2826",
        "Dest": "BRU",
        "AirlineCode": "SN",
        "InterviewerID": 7
    },
    {
        "InterviewId": "c13ccec0-2a09-4d1b-9822-16b4d80a4369",
        "InterviewEndDate": "2023-05-22 18:14:00",
        "InterviewState": "Completed",
        "Flight": "SN 2826",
        "Dest": "BRU",
        "AirlineCode": "SN",
        "InterviewerID": 7
    },
    {
        "InterviewId": "0df254c9-d8bc-470c-aaff-796a9fe339d5",
        "InterviewEndDate": "2023-05-23 13:14:27",
        "InterviewState": "Completed",
        "Flight": "W6 2397",
        "Dest": "FNC",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1cc1d88d-bc2c-448f-bdf6-601ce3ca9723",
        "InterviewEndDate": "2023-05-23 13:16:58",
        "InterviewState": "Completed",
        "Flight": "W6 2397",
        "Dest": "FNC",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ef4d1caa-3946-429f-b70a-464b14697ea8",
        "InterviewEndDate": "2023-05-23 13:10:23",
        "InterviewState": "Completed",
        "Flight": "W6 2397",
        "Dest": "FNC",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "50d7eb90-03d5-4c94-b72a-81094193c3cf",
        "InterviewEndDate": "2023-05-23 13:50:38",
        "InterviewState": "Completed",
        "Flight": "FR 6515",
        "Dest": "CIA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "4f39947a-f7a8-42fe-a853-ba3f28ec3c79",
        "InterviewEndDate": "2023-05-23 13:51:50",
        "InterviewState": "Completed",
        "Flight": "FR 6515",
        "Dest": "CIA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "21d7e4be-f3dd-4bc2-b9c8-165edec589e5",
        "InterviewEndDate": "2023-05-23 13:53:25",
        "InterviewState": "Completed",
        "Flight": "FR 6515",
        "Dest": "CIA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "f93e5318-555b-44fb-97cd-92e737cb1867",
        "InterviewEndDate": "2023-05-23 13:54:13",
        "InterviewState": "Completed",
        "Flight": "FR 6515",
        "Dest": "CIA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "b2ffd70f-3d00-40cc-8bee-b610818f282a",
        "InterviewEndDate": "2023-05-23 14:00:29",
        "InterviewState": "Completed",
        "Flight": "FR 6515",
        "Dest": "CIA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "fdd56cef-bdd8-489a-bbd4-8467fdb4d347",
        "InterviewEndDate": "2023-05-23 14:12:00",
        "InterviewState": "Completed",
        "Flight": "FR 6515",
        "Dest": "CIA",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "a157dcdf-9cd9-4839-bf17-4ec30fa5b2fe",
        "InterviewEndDate": "2023-05-24 14:35:33",
        "InterviewState": "Completed",
        "Flight": "W6 2495",
        "Dest": "MLA",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "bcbc5e12-0b4e-41d7-b8eb-21c2b25fa476",
        "InterviewEndDate": "2023-05-24 14:41:40",
        "InterviewState": "Completed",
        "Flight": "W6 2495",
        "Dest": "MLA",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "c382e6d9-dfdc-43e9-810c-7d28fc5f16ac",
        "InterviewEndDate": "2023-05-24 14:47:14",
        "InterviewState": "Completed",
        "Flight": "W6 2495",
        "Dest": "MLA",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "94511249-3c33-47b6-8b60-4f6b307bef2b",
        "InterviewEndDate": "2023-05-24 14:48:59",
        "InterviewState": "Completed",
        "Flight": "W6 2495",
        "Dest": "MLA",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "84fc96e9-652c-4e33-87c5-7d011e7998bd",
        "InterviewEndDate": "2023-05-24 14:48:38",
        "InterviewState": "Completed",
        "Flight": "W6 2495",
        "Dest": "MLA",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "a37eebe3-7a81-479e-8da5-67705d592f74",
        "InterviewEndDate": "2023-05-24 15:11:29",
        "InterviewState": "Completed",
        "Flight": "D8 3551",
        "Dest": "CPH",
        "AirlineCode": "D8",
        "InterviewerID": 7
    },
    {
        "InterviewId": "da5abb9c-9c80-41c0-ae5f-22cd190469ac",
        "InterviewEndDate": "2023-05-24 15:09:40",
        "InterviewState": "Completed",
        "Flight": "D8 3551",
        "Dest": "CPH",
        "AirlineCode": "D8",
        "InterviewerID": 7
    },
    {
        "InterviewId": "d062e47e-d781-4c79-93cb-9dfa2452e5eb",
        "InterviewEndDate": "2023-05-24 15:16:14",
        "InterviewState": "Completed",
        "Flight": "D8 3551",
        "Dest": "CPH",
        "AirlineCode": "D8",
        "InterviewerID": 7
    },
    {
        "InterviewId": "3b6308ee-10a7-4f34-8408-fc301d957532",
        "InterviewEndDate": "2023-05-24 15:20:34",
        "InterviewState": "Completed",
        "Flight": "D8 3551",
        "Dest": "CPH",
        "AirlineCode": "D8",
        "InterviewerID": 7
    },
    {
        "InterviewId": "26c3d9d1-e839-4e95-b36f-8207a000990e",
        "InterviewEndDate": "2023-05-24 15:21:40",
        "InterviewState": "Completed",
        "Flight": "D8 3551",
        "Dest": "CPH",
        "AirlineCode": "D8",
        "InterviewerID": 7
    },
    {
        "InterviewId": "4866a933-0135-4133-a8a2-c9c317d36f1e",
        "InterviewEndDate": "2023-05-24 15:23:32",
        "InterviewState": "Completed",
        "Flight": "D8 3551",
        "Dest": "CPH",
        "AirlineCode": "D8",
        "InterviewerID": 7
    },
    {
        "InterviewId": "6ab5d480-d818-4ea7-ab64-66734b7e139e",
        "InterviewEndDate": "2023-05-24 15:20:39",
        "InterviewState": "Completed",
        "Flight": "D8 3551",
        "Dest": "CPH",
        "AirlineCode": "D8",
        "InterviewerID": 7
    },
    {
        "InterviewId": "4203ef82-3c6b-47cc-b877-b134df01e263",
        "InterviewEndDate": "2023-05-25 06:33:15",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3046b746-11e8-4962-99c0-6f31fe77e22c",
        "InterviewEndDate": "2023-05-25 06:41:39",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b36c5fc6-1d4f-472d-b42c-d194641ba59e",
        "InterviewEndDate": "2023-05-25 06:39:38",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "03015e22-b817-4150-8cd6-479e11a9f7d0",
        "InterviewEndDate": "2023-05-25 06:43:42",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9cf77c3b-8a99-407f-bfd4-4214c920858d",
        "InterviewEndDate": "2023-05-25 06:46:15",
        "InterviewState": "Completed",
        "Flight": "W6 2429",
        "Dest": "IST",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "22aea5f9-259e-4f7f-a084-ace03a8a9e54",
        "InterviewEndDate": "2023-05-25 08:47:05",
        "InterviewState": "Completed",
        "Flight": "EW 2781",
        "Dest": "STR",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0f7e3b03-6605-43c3-a126-096c70394801",
        "InterviewEndDate": "2023-05-25 08:43:24",
        "InterviewState": "Completed",
        "Flight": "EW 2781",
        "Dest": "STR",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e2be68c2-6faf-4b2f-bbd0-b3b1210d8b2e",
        "InterviewEndDate": "2023-05-25 08:49:03",
        "InterviewState": "Completed",
        "Flight": "EW 2781",
        "Dest": "STR",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b584c6b8-550e-4511-a46d-bf06d2f4cb13",
        "InterviewEndDate": "2023-05-25 08:45:27",
        "InterviewState": "Completed",
        "Flight": "EW 2781",
        "Dest": "STR",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2291de21-4466-4c3e-bcea-c8494ac28a6d",
        "InterviewEndDate": "2023-05-25 08:49:13",
        "InterviewState": "Completed",
        "Flight": "EW 2781",
        "Dest": "STR",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b11179f0-4c34-493a-bd9c-380da16a35ff",
        "InterviewEndDate": "2023-05-25 08:58:18",
        "InterviewState": "Completed",
        "Flight": "EW 2781",
        "Dest": "STR",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "04a97765-d842-4447-aeb1-b74fce2c91b4",
        "InterviewEndDate": "2023-05-25 08:57:06",
        "InterviewState": "Completed",
        "Flight": "EW 2781",
        "Dest": "STR",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ff6b74b2-d38c-4922-b62c-c0956f4aa675",
        "InterviewEndDate": "2023-05-25 08:57:04",
        "InterviewState": "Completed",
        "Flight": "EW 2781",
        "Dest": "STR",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "113e5097-ad1f-4c13-a5b1-d6d05aceafd5",
        "InterviewEndDate": "2023-05-25 09:03:37",
        "InterviewState": "Completed",
        "Flight": "EW 2781",
        "Dest": "STR",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1e279afb-0e46-448d-947a-bf53d44d4eff",
        "InterviewEndDate": "2023-05-25 08:57:33",
        "InterviewState": "Completed",
        "Flight": "EW 2781",
        "Dest": "STR",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "eb2ba1cc-ece3-4599-ae92-bb3f42a7ba20",
        "InterviewEndDate": "2023-05-25 09:09:23",
        "InterviewState": "Completed",
        "Flight": "EW 2781",
        "Dest": "STR",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "353a4c81-04ec-4b40-9b16-560c3d7c0649",
        "InterviewEndDate": "2023-05-25 21:34:33",
        "InterviewState": "Completed",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "9c04b9fb-ddc9-45ea-a9dd-2a82f332efc8",
        "InterviewEndDate": "2023-05-25 21:33:24",
        "InterviewState": "Completed",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "82e4221c-4503-4414-baad-512ae2c3caa6",
        "InterviewEndDate": "2023-05-25 21:36:45",
        "InterviewState": "Completed",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "ebccbf29-1970-464d-82a8-d55cc6a9f4b6",
        "InterviewEndDate": "2023-05-26 07:30:23",
        "InterviewState": "Completed",
        "Flight": "W6 2291",
        "Dest": "DTM",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "4db24a96-d4cd-4b0b-95a6-997746e9b460",
        "InterviewEndDate": "2023-05-26 07:35:06",
        "InterviewState": "Completed",
        "Flight": "W6 2291",
        "Dest": "DTM",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "21a7e38a-bb2f-4948-9ec2-1da887ee6125",
        "InterviewEndDate": "2023-05-26 07:31:45",
        "InterviewState": "Completed",
        "Flight": "W6 2291",
        "Dest": "DTM",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "5e9e1afd-207b-418a-8450-3fe62d2edd05",
        "InterviewEndDate": "2023-05-26 07:37:13",
        "InterviewState": "Completed",
        "Flight": "W6 2291",
        "Dest": "DTM",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "51be0fb6-f0a0-4f99-b6ec-e37f64c04223",
        "InterviewEndDate": "2023-05-26 07:39:19",
        "InterviewState": "Completed",
        "Flight": "W6 2291",
        "Dest": "DTM",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "d751d89c-0b9b-4419-abea-82e768b80a05",
        "InterviewEndDate": "2023-05-26 07:48:59",
        "InterviewState": "Completed",
        "Flight": "W6 2291",
        "Dest": "DTM",
        "AirlineCode": "W6",
        "InterviewerID": 7
    },
    {
        "InterviewId": "91c77b32-4f62-48ec-a6ba-781935cef823",
        "InterviewEndDate": "2023-05-26 10:37:46",
        "InterviewState": "Completed",
        "Flight": "W6 2221",
        "Dest": "LGW",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cbd46d77-48ba-4026-ac64-68343058b937",
        "InterviewEndDate": "2023-05-26 10:39:28",
        "InterviewState": "Completed",
        "Flight": "W6 2221",
        "Dest": "LGW",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "86e78851-408c-4478-b578-8a90e84b4ba4",
        "InterviewEndDate": "2023-05-26 10:44:27",
        "InterviewState": "Completed",
        "Flight": "W6 2221",
        "Dest": "LGW",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "75bb1420-18e9-4a4b-91e6-028f78f3ea6c",
        "InterviewEndDate": "2023-05-26 10:57:52",
        "InterviewState": "Completed",
        "Flight": "W6 2221",
        "Dest": "LGW",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e293044e-8183-4e4d-b42e-45154ad1cf6a",
        "InterviewEndDate": "2023-05-26 10:56:22",
        "InterviewState": "Completed",
        "Flight": "W6 2221",
        "Dest": "LGW",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ac405e62-f731-4eff-a4d4-42fea65948a4",
        "InterviewEndDate": "2023-05-26 10:55:33",
        "InterviewState": "Completed",
        "Flight": "W6 2221",
        "Dest": "LGW",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a414b6f9-d153-4ad8-aedb-a539a97b8838",
        "InterviewEndDate": "2023-05-26 12:07:13",
        "InterviewState": "Completed",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732",
        "InterviewerID": 1
    },
    {
        "InterviewId": "514dbc3d-c5a6-47c9-8aba-354b1857cbe4",
        "InterviewEndDate": "2023-05-26 12:04:07",
        "InterviewState": "Completed",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9a9bf637-800b-4037-80ef-74744a322d3a",
        "InterviewEndDate": "2023-05-26 12:12:38",
        "InterviewState": "Completed",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732",
        "InterviewerID": 1
    },
    {
        "InterviewId": "183e276a-990e-4a72-a268-3b5ebdf7044a",
        "InterviewEndDate": "2023-05-26 12:32:06",
        "InterviewState": "Completed",
        "Flight": "FR 4329",
        "Dest": "SNN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "abb7286f-c708-4dd3-91aa-56e729068472",
        "InterviewEndDate": "2023-05-26 12:33:42",
        "InterviewState": "Completed",
        "Flight": "FR 4329",
        "Dest": "SNN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "209936a4-6378-4300-85f5-30e12c5da8ae",
        "InterviewEndDate": "2023-05-26 13:45:02",
        "InterviewState": "Completed",
        "Flight": "LH 1677",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "82c631f0-d74e-4f92-8a90-66b90a549f5e",
        "InterviewEndDate": "2023-05-26 13:45:38",
        "InterviewState": "Completed",
        "Flight": "LH 1677",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "abc41630-c675-442d-849d-20a6c16782fc",
        "InterviewEndDate": "2023-05-26 14:00:27",
        "InterviewState": "Completed",
        "Flight": "LH 1677",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b39497ab-32de-42d8-9ebd-22ec2353a3fe",
        "InterviewEndDate": "2023-05-26 13:53:55",
        "InterviewState": "Completed",
        "Flight": "LH 1677",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5149d57c-0df3-4633-830f-bce802535900",
        "InterviewEndDate": "2023-05-26 13:59:21",
        "InterviewState": "Completed",
        "Flight": "LH 1677",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8fa5036b-8682-4802-bff1-b8fbbd8a9912",
        "InterviewEndDate": "2023-05-26 21:45:07",
        "InterviewState": "Completed",
        "Flight": "EW  789",
        "Dest": "CGN",
        "AirlineCode": "EW",
        "InterviewerID": 10
    },
    {
        "InterviewId": "dbc8052c-6fd4-43e0-91cd-ce6275924ffc",
        "InterviewEndDate": "2023-05-26 21:44:36",
        "InterviewState": "Completed",
        "Flight": "EW  789",
        "Dest": "CGN",
        "AirlineCode": "EW",
        "InterviewerID": 10
    },
    {
        "InterviewId": "869176b4-2eff-4c11-8ac3-4eb1ef9caefb",
        "InterviewEndDate": "2023-05-26 21:47:18",
        "InterviewState": "Completed",
        "Flight": "EW  789",
        "Dest": "CGN",
        "AirlineCode": "EW",
        "InterviewerID": 10
    },
    {
        "InterviewId": "d4dd24c5-6e1a-4ad2-adef-7cfaf8c01936",
        "InterviewEndDate": "2023-05-26 21:43:04",
        "InterviewState": "Completed",
        "Flight": "EW  789",
        "Dest": "CGN",
        "AirlineCode": "EW",
        "InterviewerID": 10
    },
    {
        "InterviewId": "44dbe4bb-b90e-4131-88c6-1da78a829b65",
        "InterviewEndDate": "2023-05-26 21:44:14",
        "InterviewState": "Completed",
        "Flight": "EW  789",
        "Dest": "CGN",
        "AirlineCode": "EW",
        "InterviewerID": 10
    },
    {
        "InterviewId": "3a9e1f22-5af6-4c81-83b0-67bc5f3c225e",
        "InterviewEndDate": "2023-05-27 18:27:37",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 9
    },
    {
        "InterviewId": "84162ed9-fa9d-4812-bc35-7cb15ade8c41",
        "InterviewEndDate": "2023-05-27 18:20:18",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 9
    },
    {
        "InterviewId": "9f50f51c-6a66-4e39-8628-ecb873d035eb",
        "InterviewEndDate": "2023-05-27 18:27:21",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 9
    },
    {
        "InterviewId": "91bf6a7a-2429-4993-88dc-ed3246a87fe4",
        "InterviewEndDate": "2023-05-27 18:21:45",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 9
    },
    {
        "InterviewId": "912d1eef-e922-4d9f-986d-7ca62c0ba177",
        "InterviewEndDate": "2023-05-27 18:21:12",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 9
    },
    {
        "InterviewId": "8f6ba167-fb22-46b5-a3c4-5444c92e63cf",
        "InterviewEndDate": "2023-05-27 18:35:11",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 9
    },
    {
        "InterviewId": "43bcb48d-ba71-4eaf-897f-7102abcea21b",
        "InterviewEndDate": "2023-05-27 18:33:09",
        "InterviewState": "Completed",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH",
        "InterviewerID": 9
    },
    {
        "InterviewId": "90e96b56-ab0a-407f-ad5d-4f727458ecd5",
        "InterviewEndDate": "2023-05-28 10:25:31",
        "InterviewState": "Completed",
        "Flight": "D8 4488",
        "Dest": "ARN",
        "AirlineCode": "D8",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c76d19ba-82f7-48ca-ad5b-1c9730d086e4",
        "InterviewEndDate": "2023-05-28 10:24:33",
        "InterviewState": "Completed",
        "Flight": "D8 4488",
        "Dest": "ARN",
        "AirlineCode": "D8",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3b622b15-f90b-4844-b64e-f19599662bc2",
        "InterviewEndDate": "2023-05-28 11:12:45",
        "InterviewState": "Completed",
        "Flight": "W6 2263",
        "Dest": "NCE",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "433a470b-cd2b-4575-b6a9-b97575c7ba7b",
        "InterviewEndDate": "2023-05-28 11:12:35",
        "InterviewState": "Completed",
        "Flight": "W6 2263",
        "Dest": "NCE",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "15ef083e-d4fe-4807-87d9-b9c6290bfd00",
        "InterviewEndDate": "2023-05-28 11:47:47",
        "InterviewState": "Completed",
        "Flight": "W6 2493",
        "Dest": "TFS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "103c36a0-4f40-41db-a249-ce9423e1a5aa",
        "InterviewEndDate": "2023-05-28 11:48:07",
        "InterviewState": "Completed",
        "Flight": "W6 2493",
        "Dest": "TFS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ff8850d3-9469-402f-8ade-3e4d1498dd6f",
        "InterviewEndDate": "2023-05-28 11:48:26",
        "InterviewState": "Completed",
        "Flight": "W6 2493",
        "Dest": "TFS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "99bca3ca-3d77-4da2-922f-9ec9b0ffaae4",
        "InterviewEndDate": "2023-05-28 11:55:30",
        "InterviewState": "Completed",
        "Flight": "W6 2493",
        "Dest": "TFS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9e7126e1-cb67-4917-88d6-8707f42996b0",
        "InterviewEndDate": "2023-05-28 11:51:34",
        "InterviewState": "Completed",
        "Flight": "W6 2493",
        "Dest": "TFS",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a0ef61f0-7119-4643-85da-ea36cdb33f39",
        "InterviewEndDate": "2023-05-28 14:07:06",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "02556b24-a749-41e8-ad34-e331476ebf8e",
        "InterviewEndDate": "2023-05-28 14:02:26",
        "InterviewState": "Completed",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218",
        "InterviewerID": 1
    },
    {
        "InterviewId": "190a5ec8-eb3a-4251-a057-8833d158dc8b",
        "InterviewEndDate": "2023-05-29 11:09:37",
        "InterviewState": "Completed",
        "Flight": "FR 4305",
        "Dest": "TSF",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c536127b-1e94-4687-b2be-a42db71a5235",
        "InterviewEndDate": "2023-05-29 11:08:19",
        "InterviewState": "Completed",
        "Flight": "FR 4305",
        "Dest": "TSF",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "39877efa-115f-4aab-9e39-f5c746f4f03b",
        "InterviewEndDate": "2023-05-29 11:08:12",
        "InterviewState": "Completed",
        "Flight": "FR 4305",
        "Dest": "TSF",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "34ced46c-ff9f-4988-8892-28a448172523",
        "InterviewEndDate": "2023-05-29 12:21:18",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2094ae62-deb2-4bc2-a8a2-2faf27b752a2",
        "InterviewEndDate": "2023-05-29 12:21:06",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a0f72f46-866a-4e80-a560-ea57a402c010",
        "InterviewEndDate": "2023-05-29 12:19:19",
        "InterviewState": "Completed",
        "Flight": "KL 1974",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f8d2e9a5-fe9b-4c97-91bd-e936941a56ce",
        "InterviewEndDate": "2023-05-29 12:35:24",
        "InterviewState": "Completed",
        "Flight": "AF 1295",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 1
    },
    {
        "InterviewId": "454b77b4-4b5f-4a64-8e2f-b8b8fe8d2bd7",
        "InterviewEndDate": "2023-05-29 12:38:25",
        "InterviewState": "Completed",
        "Flight": "AF 1295",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3d77b4ee-5a6c-4728-b51a-ed8bedde0034",
        "InterviewEndDate": "2023-05-29 12:36:37",
        "InterviewState": "Completed",
        "Flight": "AF 1295",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4db22649-c6b3-4319-9363-9c15aaaa9b0a",
        "InterviewEndDate": "2023-05-29 12:38:21",
        "InterviewState": "Completed",
        "Flight": "AF 1295",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2243a5b0-df51-4fbc-8a4c-c9490144a2c5",
        "InterviewEndDate": "2023-05-29 12:43:14",
        "InterviewState": "Completed",
        "Flight": "AF 1295",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f556adaa-4156-474d-ad68-9e0145cbfad7",
        "InterviewEndDate": "2023-05-29 12:44:24",
        "InterviewState": "Completed",
        "Flight": "AF 1295",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 1
    },
    {
        "InterviewId": "40db8e25-c830-4866-b140-38d423f4d29d",
        "InterviewEndDate": "2023-05-29 12:53:55",
        "InterviewState": "Completed",
        "Flight": "AF 1295",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 1
    },
    {
        "InterviewId": "330bb5f5-2958-4065-9aaa-ffdab6beb009",
        "InterviewEndDate": "2023-05-29 12:48:40",
        "InterviewState": "Completed",
        "Flight": "AF 1295",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ce855ab1-7726-4aad-87e0-38479408211c",
        "InterviewEndDate": "2023-05-29 12:49:55",
        "InterviewState": "Completed",
        "Flight": "AF 1295",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 1
    },
    {
        "InterviewId": "051ef374-d79c-4bbd-9c64-6bb68deea7ae",
        "InterviewEndDate": "2023-05-29 12:53:17",
        "InterviewState": "Completed",
        "Flight": "AF 1295",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0ae27282-c5db-4a43-a5fe-59e1cd29b681",
        "InterviewEndDate": "2023-05-29 12:49:49",
        "InterviewState": "Completed",
        "Flight": "AF 1295",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a8ae44cd-e92d-4e31-8dae-b3246df0a921",
        "InterviewEndDate": "2023-05-29 13:02:46",
        "InterviewState": "Completed",
        "Flight": "AF 1295",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3657e5c8-2669-4036-82fa-def3691c64a5",
        "InterviewEndDate": "2023-05-29 13:01:47",
        "InterviewState": "Completed",
        "Flight": "AF 1295",
        "Dest": "CDG",
        "AirlineCode": "AF",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d6060d61-073d-46e2-8194-ef60e81ee69a",
        "InterviewEndDate": "2023-05-29 13:14:27",
        "InterviewState": "Completed",
        "Flight": "LO  536",
        "Dest": "WAW",
        "AirlineCode": "LO",
        "InterviewerID": 1
    },
    {
        "InterviewId": "452571eb-d798-4a60-b114-be4ce63452d0",
        "InterviewEndDate": "2023-05-29 13:14:09",
        "InterviewState": "Completed",
        "Flight": "LO  536",
        "Dest": "WAW",
        "AirlineCode": "LO",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1865dda7-3220-4c77-9637-cb64a41be09e",
        "InterviewEndDate": "2023-05-29 13:13:40",
        "InterviewState": "Completed",
        "Flight": "LO  536",
        "Dest": "WAW",
        "AirlineCode": "LO",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e62af2a6-cdb4-4440-a020-6997197efbc6",
        "InterviewEndDate": "2023-05-29 13:12:49",
        "InterviewState": "Completed",
        "Flight": "LO  536",
        "Dest": "WAW",
        "AirlineCode": "LO",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1b50a951-13ab-4ec4-94f2-eac78b4d9413",
        "InterviewEndDate": "2023-05-29 13:15:08",
        "InterviewState": "Completed",
        "Flight": "LO  536",
        "Dest": "WAW",
        "AirlineCode": "LO",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d8904b02-cbbf-41f3-837c-e75385f0441b",
        "InterviewEndDate": "2023-05-29 14:29:12",
        "InterviewState": "Completed",
        "Flight": "FR 4263",
        "Dest": "CRL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f939bf3a-d307-487a-bcfa-ac11f583d48d",
        "InterviewEndDate": "2023-05-29 14:31:58",
        "InterviewState": "Completed",
        "Flight": "FR 4263",
        "Dest": "CRL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "774234bc-d8d4-4cd4-a154-3bbcc5070781",
        "InterviewEndDate": "2023-05-29 14:34:02",
        "InterviewState": "Completed",
        "Flight": "FR 4263",
        "Dest": "CRL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a9dba5c1-7b08-49c6-85be-754e7376bb92",
        "InterviewEndDate": "2023-05-29 14:43:39",
        "InterviewState": "Completed",
        "Flight": "FR 4263",
        "Dest": "CRL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8377ebf8-a686-4eb7-a357-fe9e6f9a7e9f",
        "InterviewEndDate": "2023-05-29 14:42:37",
        "InterviewState": "Completed",
        "Flight": "FR 4263",
        "Dest": "CRL",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f0509d74-c385-4720-a2e5-f11f5f5407a2",
        "InterviewEndDate": "2023-05-29 14:59:56",
        "InterviewState": "Completed",
        "Flight": "FR 6515",
        "Dest": "CIA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1da47f07-4bc1-446f-b6ad-3b9c1b7925d0",
        "InterviewEndDate": "2023-05-29 15:10:28",
        "InterviewState": "Completed",
        "Flight": "FR 6515",
        "Dest": "CIA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4d5b7212-2816-4875-9ff6-bd5038bae4b1",
        "InterviewEndDate": "2023-05-29 15:11:07",
        "InterviewState": "Completed",
        "Flight": "FR 6515",
        "Dest": "CIA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "978d5f9f-3659-4f8d-b991-402eb200999f",
        "InterviewEndDate": "2023-05-29 15:06:37",
        "InterviewState": "Completed",
        "Flight": "FR 6515",
        "Dest": "CIA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3b889e86-e257-4859-8171-5ca5479952a8",
        "InterviewEndDate": "2023-05-29 15:06:43",
        "InterviewState": "Completed",
        "Flight": "FR 6515",
        "Dest": "CIA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3056a6e5-2d48-465b-b746-b466e1c2b214",
        "InterviewEndDate": "2023-05-29 15:12:11",
        "InterviewState": "Completed",
        "Flight": "FR 6515",
        "Dest": "CIA",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8816cbce-b22c-493f-9e75-a73df8512a16",
        "InterviewEndDate": "2023-05-29 15:42:51",
        "InterviewState": "Completed",
        "Flight": "W6 2327",
        "Dest": "TLV",
        "AirlineCode": "W6",
        "InterviewerID": 10
    },
    {
        "InterviewId": "a0ee46a2-996c-4633-bbb8-fecd1e7e3da0",
        "InterviewEndDate": "2023-05-29 15:43:46",
        "InterviewState": "Completed",
        "Flight": "W6 2327",
        "Dest": "TLV",
        "AirlineCode": "W6",
        "InterviewerID": 10
    },
    {
        "InterviewId": "90b61af8-826f-4f36-aec9-e50464606450",
        "InterviewEndDate": "2023-05-29 15:46:03",
        "InterviewState": "Completed",
        "Flight": "W6 2327",
        "Dest": "TLV",
        "AirlineCode": "W6",
        "InterviewerID": 10
    },
    {
        "InterviewId": "d7c7b477-ce5c-4eab-82e2-9637e97f19bb",
        "InterviewEndDate": "2023-05-29 15:38:24",
        "InterviewState": "Completed",
        "Flight": "W6 2327",
        "Dest": "TLV",
        "AirlineCode": "W6",
        "InterviewerID": 10
    },
    {
        "InterviewId": "c6cb2dd9-048f-4e60-ba2d-45039200aeaf",
        "InterviewEndDate": "2023-05-29 15:41:19",
        "InterviewState": "Completed",
        "Flight": "W6 2327",
        "Dest": "TLV",
        "AirlineCode": "W6",
        "InterviewerID": 10
    },
    {
        "InterviewId": "35918a18-743b-4848-951a-76451093f215",
        "InterviewEndDate": "2023-05-31 11:45:20",
        "InterviewState": "Completed",
        "Flight": "CA  436",
        "Dest": "CKG",
        "AirlineCode": "CA",
        "InterviewerID": 1
    },
    {
        "InterviewId": "32c9158c-c33f-4683-ace2-db826b1ce294",
        "InterviewEndDate": "2023-05-31 11:51:35",
        "InterviewState": "Completed",
        "Flight": "CA  436",
        "Dest": "CKG",
        "AirlineCode": "CA",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ef74c5ec-9ac1-44fa-95fe-46b51b4936de",
        "InterviewEndDate": "2023-05-31 13:20:12",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b8b34bfd-8c02-42e6-ab30-108326eb30dd",
        "InterviewEndDate": "2023-05-31 13:15:00",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "260eca7b-0009-4e0a-9f2b-42f87aab3712",
        "InterviewEndDate": "2023-05-31 13:15:19",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2fa0f70d-d048-425e-ac39-c57229f9f0f0",
        "InterviewEndDate": "2023-05-31 13:28:27",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1bdde99c-1fce-4b00-a058-9dca70a74b98",
        "InterviewEndDate": "2023-05-31 13:34:51",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3767e20b-bf81-494e-824a-ec8908bbf388",
        "InterviewEndDate": "2023-05-31 13:27:46",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a89a55c9-7ee8-46db-a4d2-9b6ced58e25f",
        "InterviewEndDate": "2023-05-31 13:29:52",
        "InterviewState": "Completed",
        "Flight": "DY 1551",
        "Dest": "OSL",
        "AirlineCode": "DY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "360467e1-3a2b-46fd-bc31-d14f589d524b",
        "InterviewEndDate": "2023-05-31 14:27:21",
        "InterviewState": "Completed",
        "Flight": "KL 1976",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "548537b4-b583-4153-81ab-3fd4cb9c6129",
        "InterviewEndDate": "2023-05-31 14:25:33",
        "InterviewState": "Completed",
        "Flight": "KL 1976",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b3d15835-2681-464c-8982-76e6921761a6",
        "InterviewEndDate": "2023-05-31 14:34:15",
        "InterviewState": "Completed",
        "Flight": "KL 1976",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d8023c91-eb35-4887-8436-690221560d43",
        "InterviewEndDate": "2023-05-31 14:30:29",
        "InterviewState": "Completed",
        "Flight": "KL 1976",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "07470117-0495-4b18-aa90-94e63035e36b",
        "InterviewEndDate": "2023-05-31 14:36:20",
        "InterviewState": "Completed",
        "Flight": "KL 1976",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1db041cd-83a4-4b87-82cb-d1b3540b058b",
        "InterviewEndDate": "2023-05-31 14:36:50",
        "InterviewState": "Completed",
        "Flight": "KL 1976",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ed93d1c8-2a0f-4f2d-9fa5-40136ac8be2c",
        "InterviewEndDate": "2023-05-31 14:40:49",
        "InterviewState": "Completed",
        "Flight": "KL 1976",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4030a5f0-c29b-4f48-8a78-b656df47ef77",
        "InterviewEndDate": "2023-05-31 15:25:59",
        "InterviewState": "Completed",
        "Flight": "LG 5808",
        "Dest": "LUX",
        "AirlineCode": "LG",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6def4698-d2d6-47e8-a5fb-56c8171ff413",
        "InterviewEndDate": "2023-05-31 15:24:20",
        "InterviewState": "Completed",
        "Flight": "LG 5808",
        "Dest": "LUX",
        "AirlineCode": "LG",
        "InterviewerID": 1
    },
    {
        "InterviewId": "09dfad0e-b0e1-4abd-94e5-c1e490020b3b",
        "InterviewEndDate": "2023-05-31 17:02:28",
        "InterviewState": "Completed",
        "Flight": "W6 2379",
        "Dest": "CDT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "386877d1-3cbb-46cf-8103-9ca42ace4414",
        "InterviewEndDate": "2023-05-31 17:01:39",
        "InterviewState": "Completed",
        "Flight": "W6 2379",
        "Dest": "CDT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1a024551-fdd1-4864-b3fe-f3881fd61142",
        "InterviewEndDate": "2023-05-31 17:14:07",
        "InterviewState": "Completed",
        "Flight": "W6 2379",
        "Dest": "CDT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "953ab9f4-dc4f-4f87-a416-8a24cd138c36",
        "InterviewEndDate": "2023-05-31 17:59:14",
        "InterviewState": "Completed",
        "Flight": "W6 2431",
        "Dest": "AYT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6f5b2fac-2d67-47ec-a928-22eff8620ca3",
        "InterviewEndDate": "2023-05-31 17:58:59",
        "InterviewState": "Completed",
        "Flight": "W6 2431",
        "Dest": "AYT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "140a6b7b-c5f4-40c8-bc2b-50cc8b48e39f",
        "InterviewEndDate": "2023-05-31 18:00:48",
        "InterviewState": "Completed",
        "Flight": "W6 2431",
        "Dest": "AYT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "40553968-5626-4172-9603-3e3724ec88d5",
        "InterviewEndDate": "2023-05-31 18:08:01",
        "InterviewState": "Completed",
        "Flight": "W6 2431",
        "Dest": "AYT",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f81729be-a3cc-41b2-af32-2b0b6ef83075",
        "InterviewEndDate": "2023-06-01 17:24:44",
        "InterviewState": "Completed",
        "Flight": "FR 4216",
        "Dest": "RHO",
        "AirlineCode": "FR",
        "InterviewerID": 7
    },
    {
        "InterviewId": "9b06a1f8-6c14-4c22-a9a6-a1010a80b301",
        "InterviewEndDate": "2023-06-02 09:02:29",
        "InterviewState": "Completed",
        "Flight": "FR 8385",
        "Dest": "BCN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cb83ca31-3bd1-4f02-9c70-438cc1b2446b",
        "InterviewEndDate": "2023-06-02 09:05:14",
        "InterviewState": "Completed",
        "Flight": "FR 8385",
        "Dest": "BCN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8e70c8b2-8a85-4b1d-abbf-cbae501ea450",
        "InterviewEndDate": "2023-06-02 09:03:32",
        "InterviewState": "Completed",
        "Flight": "FR 8385",
        "Dest": "BCN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ee8cf0c2-86f4-4fa0-b68a-ce191acf0497",
        "InterviewEndDate": "2023-06-02 09:14:58",
        "InterviewState": "Completed",
        "Flight": "FR 8385",
        "Dest": "BCN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5e82ee3a-db84-43a3-87ec-944c22451fc3",
        "InterviewEndDate": "2023-06-02 09:17:46",
        "InterviewState": "Completed",
        "Flight": "FR 8385",
        "Dest": "BCN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8e065bb5-2ccc-4fd8-9da2-31effd15ef1c",
        "InterviewEndDate": "2023-06-02 09:14:19",
        "InterviewState": "Completed",
        "Flight": "FR 8385",
        "Dest": "BCN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3485e464-cb3b-4392-add1-4e6657214d9c",
        "InterviewEndDate": "2023-06-02 09:12:22",
        "InterviewState": "Completed",
        "Flight": "FR 8385",
        "Dest": "BCN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9b8a417c-82ad-44a2-93b7-89a6da56f81d",
        "InterviewEndDate": "2023-06-02 09:12:55",
        "InterviewState": "Completed",
        "Flight": "FR 8385",
        "Dest": "BCN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9fcc488d-3bec-4e50-97e6-0c5a1930097a",
        "InterviewEndDate": "2023-06-02 09:20:25",
        "InterviewState": "Completed",
        "Flight": "FR 8385",
        "Dest": "BCN",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cacad366-8d17-4f5d-aedb-633574eaf70f",
        "InterviewEndDate": "2023-06-02 09:35:11",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5b579623-abb0-45aa-ba2b-757907997780",
        "InterviewEndDate": "2023-06-02 09:36:53",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "39a19205-c3f8-403b-9fd0-96179bc625fe",
        "InterviewEndDate": "2023-06-02 09:35:24",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "606eb4aa-157a-41ea-b3e2-4fae7dbfa3a6",
        "InterviewEndDate": "2023-06-02 09:29:50",
        "InterviewState": "Completed",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1bdadb62-2661-438b-9bf1-d5ef6b8cf62d",
        "InterviewEndDate": "2023-06-02 10:02:48",
        "InterviewState": "Completed",
        "Flight": "FR 8054",
        "Dest": "CFU",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fb40edbf-30cd-4aa7-9416-02fe5d8d3588",
        "InterviewEndDate": "2023-06-02 10:02:27",
        "InterviewState": "Completed",
        "Flight": "FR 8054",
        "Dest": "CFU",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6de7e7a7-b59b-49df-82e1-e066d4d286e8",
        "InterviewEndDate": "2023-06-02 10:37:20",
        "InterviewState": "Completed",
        "Flight": "FR 4752",
        "Dest": "AHO",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9bec9c71-fdb7-4781-85ea-2e6b43a31bc4",
        "InterviewEndDate": "2023-06-02 11:00:04",
        "InterviewState": "Completed",
        "Flight": "FR 2108",
        "Dest": "BGY",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e82fbbbb-2528-467c-90cc-41ddd71896a6",
        "InterviewEndDate": "2023-06-02 11:00:56",
        "InterviewState": "Completed",
        "Flight": "FR 2108",
        "Dest": "BGY",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d3a31312-39ac-4375-ac2f-b71fcab2873f",
        "InterviewEndDate": "2023-06-02 10:57:07",
        "InterviewState": "Completed",
        "Flight": "FR 2108",
        "Dest": "BGY",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b5db3938-0e3b-4e7a-ac9d-dd5104b069ea",
        "InterviewEndDate": "2023-06-02 10:56:29",
        "InterviewState": "Completed",
        "Flight": "FR 2108",
        "Dest": "BGY",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "69ad7665-746a-45c7-9905-f488c9f3d87f",
        "InterviewEndDate": "2023-06-02 10:55:13",
        "InterviewState": "Completed",
        "Flight": "FR 2108",
        "Dest": "BGY",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "bc187c9b-aeff-4d85-8053-cb8700f65009",
        "InterviewEndDate": "2023-06-02 11:04:18",
        "InterviewState": "Completed",
        "Flight": "FR 2108",
        "Dest": "BGY",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "aaa15bb5-0dbb-4355-92ef-0902f0b96121",
        "InterviewEndDate": "2023-06-02 11:09:44",
        "InterviewState": "Completed",
        "Flight": "FR 2108",
        "Dest": "BGY",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5789247c-290f-4a14-a9e1-c97fb63b3b9a",
        "InterviewEndDate": "2023-06-02 11:12:04",
        "InterviewState": "Completed",
        "Flight": "FR 2108",
        "Dest": "BGY",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e1daa4c1-86f0-4e7c-9d7e-22ffcac98dee",
        "InterviewEndDate": "2023-06-02 11:07:34",
        "InterviewState": "Completed",
        "Flight": "FR 2108",
        "Dest": "BGY",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "28e15587-a027-4764-84ea-bd0083d52abe",
        "InterviewEndDate": "2023-06-03 15:24:51",
        "InterviewState": "Completed",
        "Flight": "W6 2233",
        "Dest": "TIA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "24a22cd7-4f9d-465a-8f14-4cd3ab2fb965",
        "InterviewEndDate": "2023-06-03 15:33:35",
        "InterviewState": "Completed",
        "Flight": "W6 2233",
        "Dest": "TIA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4eda4f57-2570-4a95-9cd8-3e8435b5f605",
        "InterviewEndDate": "2023-06-03 15:33:10",
        "InterviewState": "Completed",
        "Flight": "W6 2233",
        "Dest": "TIA",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a3efc6fb-ac18-4506-bf50-7a738e4462a0",
        "InterviewEndDate": "2023-06-03 17:53:23",
        "InterviewState": "Completed",
        "Flight": "W6 2377",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9307246b-f431-4467-8922-123c74b93fd7",
        "InterviewEndDate": "2023-06-03 17:52:31",
        "InterviewState": "Completed",
        "Flight": "W6 2377",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3c326372-fd51-4eac-ae22-9f12516971a1",
        "InterviewEndDate": "2023-06-03 17:53:38",
        "InterviewState": "Completed",
        "Flight": "W6 2377",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d35122f4-8fcc-4763-aaae-b47e133714e2",
        "InterviewEndDate": "2023-06-03 17:52:31",
        "InterviewState": "Completed",
        "Flight": "W6 2377",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4dd39555-36db-428e-b27c-073d328946c7",
        "InterviewEndDate": "2023-06-03 17:52:37",
        "InterviewState": "Completed",
        "Flight": "W6 2377",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2c5aefd7-1c2b-46ee-9e7a-940b120c5ebb",
        "InterviewEndDate": "2023-06-03 18:01:28",
        "InterviewState": "Completed",
        "Flight": "W6 2377",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b357e547-a453-4e4c-b244-ec22511754ca",
        "InterviewEndDate": "2023-06-03 18:07:53",
        "InterviewState": "Completed",
        "Flight": "W6 2377",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4ef709f8-fc69-4489-9531-23e30226f17b",
        "InterviewEndDate": "2023-06-03 18:06:31",
        "InterviewState": "Completed",
        "Flight": "W6 2377",
        "Dest": "BCN",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9d176db9-9844-40a5-86ca-be55bb9a6610",
        "InterviewEndDate": "2023-06-03 19:02:10",
        "InterviewState": "Completed",
        "Flight": "FR 5248",
        "Dest": "CAG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1480290f-dea5-4819-89a9-d3970aac717a",
        "InterviewEndDate": "2023-06-03 19:00:00",
        "InterviewState": "Completed",
        "Flight": "FR 5248",
        "Dest": "CAG",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1b1e9901-a992-4477-9f9a-586cd95ed3ad",
        "InterviewEndDate": "2023-06-03 19:38:05",
        "InterviewState": "Completed",
        "Flight": "W6 2217",
        "Dest": "BHX",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c9deed29-b545-40c3-991b-419296e6fa2c",
        "InterviewEndDate": "2023-06-03 19:47:50",
        "InterviewState": "Completed",
        "Flight": "W6 2217",
        "Dest": "BHX",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8a92bfdd-8f77-42cb-a12f-6076201132c6",
        "InterviewEndDate": "2023-06-03 19:44:13",
        "InterviewState": "Completed",
        "Flight": "W6 2217",
        "Dest": "BHX",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "41a288c3-2945-4db8-8b3b-6073fb966ba3",
        "InterviewEndDate": "2023-06-05 06:00:12",
        "InterviewState": "Completed",
        "Flight": "FR 5570",
        "Dest": "SOF",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d7521e85-0a69-4503-a7ce-96cb05c1eea4",
        "InterviewEndDate": "2023-06-05 06:05:01",
        "InterviewState": "Completed",
        "Flight": "FR 5570",
        "Dest": "SOF",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "130604f5-1eca-4a5a-89c0-40e5bf81b315",
        "InterviewEndDate": "2023-06-05 06:25:21",
        "InterviewState": "Completed",
        "Flight": "W6 2231",
        "Dest": "TGD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f10f19d7-50f4-4aa1-b5b0-13b368c9e8c1",
        "InterviewEndDate": "2023-06-05 06:38:23",
        "InterviewState": "Completed",
        "Flight": "W6 2231",
        "Dest": "TGD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "568ee9ee-dd64-475d-a734-f5182afdd4df",
        "InterviewEndDate": "2023-06-05 06:31:35",
        "InterviewState": "Completed",
        "Flight": "W6 2231",
        "Dest": "TGD",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0ba1691c-9a51-4c5e-a7b7-9b4fb70d7033",
        "InterviewEndDate": "2023-06-05 08:59:00",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "96fc9e91-9167-4445-a10c-3859a8b699cb",
        "InterviewEndDate": "2023-06-05 08:49:57",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a7c5e2ad-65d8-4c4d-85af-4cc5adc885f8",
        "InterviewEndDate": "2023-06-05 08:53:11",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "31792706-0cd7-43c7-85cd-67097cb592f0",
        "InterviewEndDate": "2023-06-05 08:54:45",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "10e1bc17-0e52-4c81-b8ca-8de8ca86e70a",
        "InterviewEndDate": "2023-06-05 08:57:30",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9f23dea7-275e-487e-b841-4d6eb1e6c161",
        "InterviewEndDate": "2023-06-05 09:08:03",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7c7c9171-7880-4529-aa45-f84696724f7e",
        "InterviewEndDate": "2023-06-05 09:06:59",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c5fd8205-423a-4eee-961c-ec90041e5f57",
        "InterviewEndDate": "2023-06-05 09:09:14",
        "InterviewState": "Completed",
        "Flight": "TK 1036",
        "Dest": "IST",
        "AirlineCode": "TK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c66a1bf5-bdb2-4b2d-a2af-de109a135ee3",
        "InterviewEndDate": "2023-06-08 11:33:56",
        "InterviewState": "Completed",
        "Flight": "FR 7432",
        "Dest": "BOJ",
        "AirlineCode": "FR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7515c3e1-17f7-4fb4-8267-2464d902998a",
        "InterviewEndDate": "2023-06-08 12:30:41",
        "InterviewState": "Completed",
        "Flight": "W6 2357",
        "Dest": "AUH",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2fbfa583-7e3d-4cb7-87f7-f5d637af6b2b",
        "InterviewEndDate": "2023-06-08 12:30:18",
        "InterviewState": "Completed",
        "Flight": "W6 2357",
        "Dest": "AUH",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5f89a589-9079-427d-b863-d1f7d0856f91",
        "InterviewEndDate": "2023-06-08 12:41:03",
        "InterviewState": "Completed",
        "Flight": "W6 2357",
        "Dest": "AUH",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "256ffa84-4a22-4a58-a177-3a9dcba6fb51",
        "InterviewEndDate": "2023-06-08 12:43:50",
        "InterviewState": "Completed",
        "Flight": "W6 2357",
        "Dest": "AUH",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7e6f452f-5d4b-43f7-a21a-520d074ad2dd",
        "InterviewEndDate": "2023-06-08 13:26:37",
        "InterviewState": "Completed",
        "Flight": "W6 2485",
        "Dest": "TGM",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6ba81dc3-97bb-494a-a78c-c4d40aeb472f",
        "InterviewEndDate": "2023-06-08 13:29:01",
        "InterviewState": "Completed",
        "Flight": "W6 2485",
        "Dest": "TGM",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f665a869-53ab-445d-a2e8-90ad85cae1b6",
        "InterviewEndDate": "2023-06-08 13:31:12",
        "InterviewState": "Completed",
        "Flight": "W6 2485",
        "Dest": "TGM",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c0a0f586-dddc-4547-ae78-f051c534c16c",
        "InterviewEndDate": "2023-06-08 13:41:34",
        "InterviewState": "Completed",
        "Flight": "W6 2485",
        "Dest": "TGM",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ed762b3f-5484-488d-861d-83f5d6299227",
        "InterviewEndDate": "2023-06-08 13:36:26",
        "InterviewState": "Completed",
        "Flight": "W6 2485",
        "Dest": "TGM",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "190005fd-81c3-497f-9e56-6b14de930870",
        "InterviewEndDate": "2023-06-08 13:40:43",
        "InterviewState": "Completed",
        "Flight": "W6 2485",
        "Dest": "TGM",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b5c69b73-c974-447b-a181-d374ff588ff1",
        "InterviewEndDate": "2023-06-08 13:38:12",
        "InterviewState": "Completed",
        "Flight": "W6 2485",
        "Dest": "TGM",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0e5bd3f5-71d1-4f86-894d-6bab5ae097c3",
        "InterviewEndDate": "2023-06-08 15:33:30",
        "InterviewState": "Completed",
        "Flight": "W6 2427",
        "Dest": "KEF",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6ba71fee-7496-40c8-a50c-b986681344d1",
        "InterviewEndDate": "2023-06-08 15:38:09",
        "InterviewState": "Completed",
        "Flight": "W6 2427",
        "Dest": "KEF",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b80accde-1a8d-4db3-9e45-7a9bc4e2a778",
        "InterviewEndDate": "2023-06-08 15:35:31",
        "InterviewState": "Completed",
        "Flight": "W6 2427",
        "Dest": "KEF",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6ed67264-a732-4adf-86d7-baaf6b008374",
        "InterviewEndDate": "2023-06-08 15:31:50",
        "InterviewState": "Completed",
        "Flight": "W6 2427",
        "Dest": "KEF",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4e3bef8e-7910-4b13-8ed8-d4fc98e39ea2",
        "InterviewEndDate": "2023-06-08 16:15:00",
        "InterviewState": "Completed",
        "Flight": "W6 2389",
        "Dest": "AGP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f727fd8f-0f46-4ec6-bf3e-d4622d55cb77",
        "InterviewEndDate": "2023-06-08 16:24:44",
        "InterviewState": "Completed",
        "Flight": "W6 2389",
        "Dest": "AGP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b7a9bd85-b25c-4084-bd91-d6db3124b292",
        "InterviewEndDate": "2023-06-08 16:22:06",
        "InterviewState": "Completed",
        "Flight": "W6 2389",
        "Dest": "AGP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0d8b04a8-6bec-41fe-b742-2f7d123ce8de",
        "InterviewEndDate": "2023-06-08 16:25:46",
        "InterviewState": "Completed",
        "Flight": "W6 2389",
        "Dest": "AGP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "637d7c06-14ae-420c-97ea-5059dd5ed05b",
        "InterviewEndDate": "2023-06-08 16:23:08",
        "InterviewState": "Completed",
        "Flight": "W6 2389",
        "Dest": "AGP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f9511644-030e-4a05-95ec-6a2979d64ff8",
        "InterviewEndDate": "2023-06-08 16:34:59",
        "InterviewState": "Completed",
        "Flight": "W6 2389",
        "Dest": "AGP",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4ac98a53-ffdf-4036-bd6c-44d7f74a6ea2",
        "InterviewEndDate": "2023-06-08 17:11:51",
        "InterviewState": "Completed",
        "Flight": "W6 2225",
        "Dest": "EDI",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8467d4ea-b2bb-491e-a131-c128cc37d50f",
        "InterviewEndDate": "2023-06-08 17:12:20",
        "InterviewState": "Completed",
        "Flight": "W6 2225",
        "Dest": "EDI",
        "AirlineCode": "W6",
        "InterviewerID": 1
    },
    {
        "InterviewId": "534d4242-6218-437a-935a-26d10fbd2482",
        "InterviewEndDate": "2023-06-09 11:21:44",
        "InterviewState": "Completed",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "d7be72b6-2659-4486-8172-ffc74b3fffe8",
        "InterviewEndDate": "2023-06-09 11:16:34",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 9
    },
    {
        "InterviewId": "28c752a8-01e9-4025-8f7b-7793810a05ec",
        "InterviewEndDate": "2023-06-09 11:20:59",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 9
    },
    {
        "InterviewId": "fdb2a5de-09ed-4175-82fa-732411d8c6fb",
        "InterviewEndDate": "2023-06-09 11:17:35",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 9
    },
    {
        "InterviewId": "2d2c47c0-f39e-486a-aeab-51eddae5aa2b",
        "InterviewEndDate": "2023-06-09 11:19:25",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 9
    },
    {
        "InterviewId": "757ad7cd-a2c5-44b4-bb4d-6ab39347625a",
        "InterviewEndDate": "2023-06-09 11:26:51",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 9
    },
    {
        "InterviewId": "eb13588d-626b-4999-ae9b-f74d9d23be11",
        "InterviewEndDate": "2023-06-09 11:27:54",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 9
    },
    {
        "InterviewId": "55b6d16a-9cae-48b4-a2cf-bc73a2313190",
        "InterviewEndDate": "2023-06-09 11:25:28",
        "InterviewState": "Completed",
        "Flight": "LH 1337",
        "Dest": "FRA",
        "AirlineCode": "LH",
        "InterviewerID": 9
    },
    {
        "InterviewId": "858b3009-b03e-4404-814e-703ceec2aa07",
        "InterviewEndDate": "2023-06-09 16:50:25",
        "InterviewState": "Completed",
        "Flight": "FR 3330",
        "Dest": "PFO",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "9b9d4e16-5652-4d1b-ac04-c7f65c9e8bd2",
        "InterviewEndDate": "2023-06-09 16:53:36",
        "InterviewState": "Completed",
        "Flight": "FR 3330",
        "Dest": "PFO",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "717656e0-b414-4e9d-958c-8abf69f690c7",
        "InterviewEndDate": "2023-06-09 16:50:22",
        "InterviewState": "Completed",
        "Flight": "FR 3330",
        "Dest": "PFO",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "715cdc8c-8080-4b8f-8899-a48762d45681",
        "InterviewEndDate": "2023-06-09 16:58:34",
        "InterviewState": "Completed",
        "Flight": "FR 3330",
        "Dest": "PFO",
        "AirlineCode": "FR",
        "InterviewerID": 9
    },
    {
        "InterviewId": "03ca39dd-e6e1-45ee-8581-450c8bc5094a",
        "InterviewEndDate": "2023-06-09 16:54:01",
        "InterviewState": "Completed",
        "Flight": "FR 3330",
        "Dest": "PFO",
        "AirlineCode": "FR",
        "InterviewerID": 9
    }
]    

 `;