let interview_data_raw = `[
    {
        "InterviewId": "1d885a9c-0875-4e15-b490-0b6419bb54ae",
        "InterviewEndDate": "2023-06-09 10:22:19",
        "InterviewState": "Completed",
        "Flight": "4M 0852",
        "Dest": "AYT",
        "InterviewerID": 999,
        "download_time": "14-06-2023 03:07:04"
    },
    {
        "InterviewId": "965d167c-8ff2-4293-9236-12a1a0e6ea27",
        "InterviewEndDate": "2023-06-07 11:27:02",
        "InterviewState": "Completed",
        "Flight": "4M 0852",
        "Dest": "AYT",
        "InterviewerID": 999
    },
    {
        "InterviewId": "81f3a919-c4b5-4a24-a644-241f361ee30f",
        "InterviewEndDate": "2023-06-08 07:25:14",
        "InterviewState": "Completed",
        "Flight": "OS 0551",
        "Dest": "ZRH",
        "InterviewerID": 999
    },
    {
        "InterviewId": "051309fc-b4d2-47ed-af11-8dfb63ca861d",
        "InterviewEndDate": "2023-06-08 07:36:25",
        "InterviewState": "Completed",
        "Flight": "4M 0852",
        "Dest": "AYT",
        "InterviewerID": 999
    },
    {
        "InterviewId": "ee0bb104-8333-448f-a0bc-437d0ef82fd4",
        "InterviewEndDate": "2023-06-09 05:51:04",
        "InterviewState": "Completed",
        "Flight": "4M 0852",
        "Dest": "AYT",
        "InterviewerID": 999
    },
    {
        "InterviewId": "06f40434-277c-40db-9114-b4be86ac5138",
        "InterviewEndDate": "2023-06-08 14:06:03",
        "InterviewState": "Completed",
        "Flight": "W6 2849",
        "Dest": "NCE",
        "InterviewerID": 999
    },
    {
        "InterviewId": "c8429fa7-47c1-420c-8ddf-07b0d3ca02d5",
        "InterviewEndDate": "2023-06-08 14:29:32",
        "InterviewState": "Completed",
        "Flight": "A3 0437",
        "Dest": "HER",
        "InterviewerID": 999
    },
    {
        "InterviewId": "b6fcab94-97fe-4968-87ee-1e29b0af876f",
        "InterviewEndDate": "2023-06-09 18:38:53",
        "InterviewState": "Completed",
        "Flight": "4M 0852",
        "Dest": "AYT",
        "InterviewerID": 999
    },
    {
        "InterviewId": "7a616fd7-97bf-4d37-9b27-f9ea77fa0180",
        "InterviewEndDate": "2023-06-13 11:03:34",
        "InterviewState": "Completed",
        "Flight": "W6 2803",
        "Dest": "DMM",
        "InterviewerID": 999
    },
    {
        "InterviewId": "d47d9305-c7ef-47be-8ff7-d272a85cf2b2",
        "InterviewEndDate": "2023-06-13 11:04:34",
        "InterviewState": "Completed",
        "Flight": "W6 2825",
        "Dest": "OHD",
        "InterviewerID": 999
    },
    {
        "InterviewId": "464a3c02-bfeb-4d37-a475-e011a4d15fd6",
        "InterviewEndDate": "2023-06-13 12:22:37",
        "InterviewState": "Completed",
        "Flight": "A3 0437",
        "Dest": "HER",
        "InterviewerID": 999
    },
    {
        "InterviewId": "6154c371-e7c2-4a13-8261-74eeff2f120c",
        "InterviewEndDate": "2023-06-13 11:01:33",
        "InterviewState": "Completed",
        "Flight": "4M 0852",
        "Dest": "AYT",
        "InterviewerID": 999
    },
    {
        "InterviewId": "cc870c7e-92b0-4f9d-b7e6-dd833517d016",
        "InterviewEndDate": "2023-06-13 11:05:30",
        "InterviewState": "Completed",
        "Flight": "W6 2803",
        "Dest": "DMM",
        "InterviewerID": 999
    },
    {
        "InterviewId": "90eaa4ca-bb0a-42c5-b028-f420817aa842",
        "InterviewEndDate": "2023-06-09 05:48:39",
        "InterviewState": "Completed",
        "Flight": "4M 0852",
        "Dest": "AYT",
        "InterviewerID": 999
    },
    {
        "InterviewId": "b7ed031c-9bb7-4140-9537-47855e97879f",
        "InterviewEndDate": "2023-06-09 18:42:47",
        "InterviewState": "Completed",
        "Flight": "4M 0852",
        "Dest": "AYT",
        "InterviewerID": 999
    },
    {
        "InterviewId": "08189df8-99a2-4cc2-ad28-29a045659ec2",
        "InterviewEndDate": "2023-06-09 18:50:09",
        "InterviewState": "Completed",
        "Flight": "4M 0852",
        "Dest": "AYT",
        "InterviewerID": 2
    },
    {
        "InterviewId": "7b173cad-ccdb-4fd2-9d59-02b71c9d07b4",
        "InterviewEndDate": "2023-06-09 19:32:41",
        "InterviewState": "Completed",
        "Flight": "W6 2809",
        "Dest": "CHQ",
        "InterviewerID": 999
    },
    {
        "InterviewId": "428f99b5-5a7e-4626-b025-1b3efed29b3e",
        "InterviewEndDate": "2023-06-10 11:40:43",
        "InterviewState": "Completed",
        "Flight": "AF 1309",
        "Dest": "CDG",
        "InterviewerID": 999
    },
    {
        "InterviewId": "c008ccbe-e377-4f70-86fa-eda8c23bb319",
        "InterviewEndDate": "2023-06-11 17:09:12",
        "InterviewState": "Completed",
        "Flight": "A3 0437",
        "Dest": "HER",
        "InterviewerID": 999
    },
    {
        "InterviewId": "c804f802-9153-451c-9c79-4d02d01f0bbf",
        "InterviewEndDate": "2023-06-13 11:08:26",
        "InterviewState": "Completed",
        "Flight": "A3 0437",
        "Dest": "HER",
        "InterviewerID": 999
    },
    {
        "InterviewId": "affab415-942c-4024-b9c5-9fda2973a7fd",
        "InterviewEndDate": "2023-06-13 12:09:13",
        "InterviewState": "Completed",
        "Flight": "OS 0335",
        "Dest": "OSL",
        "InterviewerID": 8
    },
    {
        "InterviewId": "74c98f56-3769-4b1f-aa6c-54fd6fbe9ca9",
        "InterviewEndDate": "2023-06-13 12:13:21",
        "InterviewState": "Completed",
        "Flight": "OS 0335",
        "Dest": "OSL",
        "InterviewerID": 1000
    },
    {
        "InterviewId": "bd55cb6a-563c-46b6-a580-f84602588d98",
        "InterviewEndDate": "2023-06-13 11:17:03",
        "InterviewState": "Completed",
        "Flight": "A3 0437",
        "Dest": "HER",
        "InterviewerID": 999
    },
    {
        "InterviewId": "75ca9920-b45a-4b91-b867-722869258e3c",
        "InterviewEndDate": "2023-06-13 11:37:27",
        "InterviewState": "Completed",
        "Flight": "AF 1139",
        "Dest": "CDG",
        "InterviewerID": 999
    },
    {
        "InterviewId": "6e4735a0-840b-40ca-8bb8-5f8219fb39cb",
        "InterviewEndDate": "2023-06-13 12:14:58",
        "InterviewState": "Completed",
        "Flight": "OS 0335",
        "Dest": "OSL",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "d1ecb2b2-b3ba-4214-8e23-c525263773b1",
        "InterviewEndDate": "2023-06-13 12:35:14",
        "InterviewState": "Completed",
        "Flight": "OS 0313",
        "Dest": "ARN",
        "InterviewerID": 8
    },
    {
        "InterviewId": "49272575-d36d-4ec1-9ce7-f8fbe05ad5f9",
        "InterviewEndDate": "2023-06-13 12:39:45",
        "InterviewState": "Completed",
        "Flight": "OS 0313",
        "Dest": "ARN",
        "InterviewerID": 1001
    },
    {
        "InterviewId": "74d4ab15-9f32-4452-b037-8feb45bc78cd",
        "InterviewEndDate": "2023-06-13 12:34:38",
        "InterviewState": "Completed",
        "Flight": "OS 0313",
        "Dest": "ARN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "e5d1506c-f9f4-4bee-a1c7-d7e3e199e1e3",
        "InterviewEndDate": "2023-06-13 12:28:39",
        "InterviewState": "Completed",
        "Flight": "A3 0437",
        "Dest": "HER",
        "InterviewerID": 999
    },
    {
        "InterviewId": "be94715e-b008-44d1-8abe-e43ad54cb599",
        "InterviewEndDate": "2023-06-13 12:52:51",
        "InterviewState": "Completed",
        "Flight": "OS 0509",
        "Dest": "MXP",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "0c5c77b4-2506-4fe5-8a62-77fb1ed4612c",
        "InterviewEndDate": "2023-06-13 12:57:32",
        "InterviewState": "Completed",
        "Flight": "OS 0509",
        "Dest": "MXP",
        "InterviewerID": 8
    },
    {
        "InterviewId": "906f0a92-8d4c-4a5f-998c-ebd4a75865bd",
        "InterviewEndDate": "2023-06-13 13:01:29",
        "InterviewState": "Completed",
        "Flight": "OS 0509",
        "Dest": "MXP",
        "InterviewerID": 1000
    },
    {
        "InterviewId": "965eee7a-fb35-4762-99cb-cdb3f19e9f38",
        "InterviewEndDate": "2023-06-13 13:56:19",
        "InterviewState": "Completed",
        "Flight": "A3 0437",
        "Dest": "HER",
        "InterviewerID": 999
    },
    {
        "InterviewId": "fbc1c84b-59b6-4a48-a88f-2bf17e17e843",
        "InterviewEndDate": "2023-06-13 13:15:29",
        "InterviewState": "Completed",
        "Flight": "A3 0437",
        "Dest": "HER",
        "InterviewerID": 999
    },
    {
        "InterviewId": "7931408f-214f-4556-b441-05669b92092b",
        "InterviewEndDate": "2023-06-13 13:53:37",
        "InterviewState": "Completed",
        "Flight": "4M 0852",
        "Dest": "AYT",
        "InterviewerID": 999
    },
    {
        "InterviewId": "8a788a89-39b6-4f15-879d-af260d32c0a9",
        "InterviewEndDate": "2023-06-13 14:14:54",
        "InterviewState": "Completed",
        "Flight": "OS 0211",
        "Dest": "FRA",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "6c495a18-5c1e-48d5-a242-f323b9aa70ff",
        "InterviewEndDate": "2023-06-13 14:19:08",
        "InterviewState": "Completed",
        "Flight": "OS 0211",
        "Dest": "FRA",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "7bc55098-300f-4574-afcf-5f7ca1dba356",
        "InterviewEndDate": "2023-06-13 14:35:52",
        "InterviewState": "Completed",
        "Flight": "OS 0441",
        "Dest": "VLC",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "58aad432-8c14-4b15-bd74-47d1f53db713",
        "InterviewEndDate": "2023-06-13 14:45:43",
        "InterviewState": "Completed",
        "Flight": "OS 0441",
        "Dest": "VLC",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "896245d3-1dcf-4605-a2f1-a04570036522",
        "InterviewEndDate": "2023-06-13 14:18:43",
        "InterviewState": "Completed",
        "Flight": "A3 0437",
        "Dest": "HER",
        "InterviewerID": 999
    },
    {
        "InterviewId": "b288a441-2a26-412d-9634-0908cd23c058",
        "InterviewEndDate": "2023-06-13 14:45:31",
        "InterviewState": "Completed",
        "Flight": "OS 0441",
        "Dest": "VLC",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "1935f5f0-59f9-4c34-ab29-6d81209814b3",
        "InterviewEndDate": "2023-06-13 15:48:22",
        "InterviewState": "Completed",
        "Flight": "OS 0353",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "cecfb93d-7809-4d39-8b3b-1b8fdd265c14",
        "InterviewEndDate": "2023-06-13 15:40:29",
        "InterviewState": "Completed",
        "Flight": "OS 0353",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "a3cd5e23-d0cd-416e-9fde-b3af88471850",
        "InterviewEndDate": "2023-06-13 15:42:10",
        "InterviewState": "Completed",
        "Flight": "OS 0353",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "5227b46c-c32d-403b-a996-745e18c1419f",
        "InterviewEndDate": "2023-06-13 15:42:19",
        "InterviewState": "Completed",
        "Flight": "OS 0353",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "d02afd94-b3f0-48be-9c36-634584d512ec",
        "InterviewEndDate": "2023-06-13 15:45:46",
        "InterviewState": "Completed",
        "Flight": "OS 0353",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "55742aa7-e7a5-44bf-9757-d85bab9ab65f",
        "InterviewEndDate": "2023-06-13 16:02:23",
        "InterviewState": "Completed",
        "Flight": "EW 0753",
        "Dest": "CGN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "4e0e1703-80f9-4b6a-913c-d7dd87a0e6a6",
        "InterviewEndDate": "2023-06-13 16:04:50",
        "InterviewState": "Completed",
        "Flight": "EW 0753",
        "Dest": "CGN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "f7225ffd-1a11-401b-8d43-a73edaadabc3",
        "InterviewEndDate": "2023-06-13 16:04:21",
        "InterviewState": "Completed",
        "Flight": "EW 0753",
        "Dest": "CGN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "0953c5aa-2d5d-4a0a-9555-729ade5c405b",
        "InterviewEndDate": "2023-06-13 16:02:38",
        "InterviewState": "Completed",
        "Flight": "EW 0753",
        "Dest": "CGN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "e4c74978-ae02-4502-b302-1dbde7c2235e",
        "InterviewEndDate": "2023-06-13 16:12:19",
        "InterviewState": "Completed",
        "Flight": "EW 0753",
        "Dest": "CGN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "cfd4165b-4ba1-41e1-8bdc-b177aad5add7",
        "InterviewEndDate": "2023-06-13 16:12:08",
        "InterviewState": "Completed",
        "Flight": "EW 0753",
        "Dest": "CGN",
        "InterviewerID": 999
    },
    {
        "InterviewId": "1d5e8e0e-fc99-41d9-94f0-d1a9e101f58f",
        "InterviewEndDate": "2023-06-13 16:29:36",
        "InterviewState": "Completed",
        "Flight": "OS 0535",
        "Dest": "FLR",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "2ecda8d7-90c2-46af-879e-1170a1f4d386",
        "InterviewEndDate": "2023-06-13 16:24:17",
        "InterviewState": "Completed",
        "Flight": "OS 0535",
        "Dest": "FLR",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "a6d6391a-7033-4745-9c81-3497a68f9ba9",
        "InterviewEndDate": "2023-06-13 16:32:06",
        "InterviewState": "Completed",
        "Flight": "OS 0535",
        "Dest": "FLR",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "7332e477-24a0-42d6-ae3f-820f284d49e7",
        "InterviewEndDate": "2023-06-13 16:29:53",
        "InterviewState": "Completed",
        "Flight": "OS 0535",
        "Dest": "FLR",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "5b1a43d8-33b3-4308-9075-e939179a1959",
        "InterviewEndDate": "2023-06-13 16:36:54",
        "InterviewState": "Completed",
        "Flight": "OS 0535",
        "Dest": "FLR",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "d043fc70-80a7-4fc0-a5ac-a4fe67540c1c",
        "InterviewEndDate": "2023-06-13 17:34:55",
        "InterviewState": "Completed",
        "Flight": "OS 0355",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "1b346a31-e582-427e-bd92-f8223a68f8ff",
        "InterviewEndDate": "2023-06-13 17:35:22",
        "InterviewState": "Completed",
        "Flight": "OS 0355",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "8567c0c6-9fdb-4b63-813d-4880e205a8e0",
        "InterviewEndDate": "2023-06-13 17:37:59",
        "InterviewState": "Completed",
        "Flight": "OS 0355",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "186496e5-6424-49ae-be1e-4bf45aa9216d",
        "InterviewEndDate": "2023-06-13 17:34:50",
        "InterviewState": "Completed",
        "Flight": "OS 0355",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "c27b7718-34ed-43bc-b007-81b4fe358d79",
        "InterviewEndDate": "2023-06-13 17:54:10",
        "InterviewState": "Completed",
        "Flight": "OS 0549",
        "Dest": "BLQ",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "253255c1-eed2-4ff5-8825-e07c1f1204b3",
        "InterviewEndDate": "2023-06-13 17:40:50",
        "InterviewState": "Completed",
        "Flight": "OS 0355",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "cc5c6446-f6ea-40f2-860b-6f486bb67fa4",
        "InterviewEndDate": "2023-06-13 17:44:14",
        "InterviewState": "Completed",
        "Flight": "OS 0355",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "ed025351-05ea-4692-a2de-dac1ce179d45",
        "InterviewEndDate": "2023-06-13 17:47:47",
        "InterviewState": "Completed",
        "Flight": "OS 0355",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "ca0a5db9-e541-4c13-9990-ba67d26f036f",
        "InterviewEndDate": "2023-06-13 17:53:46",
        "InterviewState": "Completed",
        "Flight": "OS 0549",
        "Dest": "BLQ",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "b23c11ca-8735-4583-ab5b-8c558d6d0b65",
        "InterviewEndDate": "2023-06-13 17:53:56",
        "InterviewState": "Completed",
        "Flight": "OS 0549",
        "Dest": "BLQ",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "224bfb73-e0a0-409d-998e-b63ea3e18907",
        "InterviewEndDate": "2023-06-13 17:54:36",
        "InterviewState": "Completed",
        "Flight": "OS 0549",
        "Dest": "BLQ",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "e3d157d4-646e-4d48-b34c-b9066728a457",
        "InterviewEndDate": "2023-06-13 18:03:15",
        "InterviewState": "Completed",
        "Flight": "OS 0549",
        "Dest": "BLQ",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "b707f0e2-5cd4-4ea7-9ab8-a45e4e9a1d89",
        "InterviewEndDate": "2023-06-13 18:13:34",
        "InterviewState": "Completed",
        "Flight": "SN 2906",
        "Dest": "BRU",
        "InterviewerID": 999
    },
    {
        "InterviewId": "c4141897-c0ba-4224-81a1-0cd496de5a5e",
        "InterviewEndDate": "2023-06-13 18:17:19",
        "InterviewState": "Completed",
        "Flight": "SN 2906",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "b37c497b-ed26-4334-ad7e-34bd47f9df7b",
        "InterviewEndDate": "2023-06-13 18:20:20",
        "InterviewState": "Completed",
        "Flight": "SN 2906",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "a5ac2df1-3837-4a82-8926-f79c8f824415",
        "InterviewEndDate": "2023-06-13 18:16:28",
        "InterviewState": "Completed",
        "Flight": "SN 2906",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "f8b82a7c-5605-4348-99ac-6ff9bf6bdcc1",
        "InterviewEndDate": "2023-06-13 18:23:59",
        "InterviewState": "Completed",
        "Flight": "SN 2906",
        "Dest": "BRU",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "cf3c9272-2c9f-476d-8b62-58169a992d45",
        "InterviewEndDate": "2023-06-13 18:40:10",
        "InterviewState": "Completed",
        "Flight": "OS 0515",
        "Dest": "MXP",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "0a8d6d70-df9a-4783-853b-4bf9c50a7510",
        "InterviewEndDate": "2023-06-13 18:36:52",
        "InterviewState": "Completed",
        "Flight": "OS 0515",
        "Dest": "MXP",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "59d53f57-fc4f-43f8-bc80-536e43c4b3c8",
        "InterviewEndDate": "2023-06-13 18:31:55",
        "InterviewState": "Completed",
        "Flight": "OS 0515",
        "Dest": "MXP",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "44e37b55-1c2a-461e-bad3-a6bba003f16a",
        "InterviewEndDate": "2023-06-13 18:38:44",
        "InterviewState": "Completed",
        "Flight": "OS 0515",
        "Dest": "MXP",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "fd7f7cb4-e11d-45b7-8fdd-6c487993bf64",
        "InterviewEndDate": "2023-06-13 18:44:10",
        "InterviewState": "Completed",
        "Flight": "OS 0515",
        "Dest": "MXP",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "39fbec54-078b-472a-ad92-fdc386f315d7",
        "InterviewEndDate": "2023-06-13 19:02:28",
        "InterviewState": "Completed",
        "Flight": "OS 0429",
        "Dest": "NCE",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "c29d9e10-e9a6-4c30-93d2-95b7c1d4ff51",
        "InterviewEndDate": "2023-06-13 18:58:01",
        "InterviewState": "Completed",
        "Flight": "OS 0429",
        "Dest": "NCE",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "651cc892-d394-4385-96dc-393afd3b6271",
        "InterviewEndDate": "2023-06-13 19:00:19",
        "InterviewState": "Completed",
        "Flight": "OS 0429",
        "Dest": "NCE",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "1a5f38da-e033-4241-9484-307232506896",
        "InterviewEndDate": "2023-06-13 18:59:33",
        "InterviewState": "Completed",
        "Flight": "OS 0429",
        "Dest": "NCE",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "d37b1f64-89ca-43e3-a345-83e96cc4a89a",
        "InterviewEndDate": "2023-06-13 19:09:36",
        "InterviewState": "Completed",
        "Flight": "EW 9757",
        "Dest": "DUS",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "7da006c5-f5d1-48a9-a652-a0b5132ad792",
        "InterviewEndDate": "2023-06-13 19:25:23",
        "InterviewState": "Completed",
        "Flight": "EW 9757",
        "Dest": "DUS",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "546f3999-b772-444a-8bbf-afdfbe234ffc",
        "InterviewEndDate": "2023-06-13 19:25:11",
        "InterviewState": "Completed",
        "Flight": "EW 9757",
        "Dest": "DUS",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "0c3e0c78-4aad-4a23-9691-215143e2f3a3",
        "InterviewEndDate": "2023-06-13 19:14:47",
        "InterviewState": "Completed",
        "Flight": "EW 9757",
        "Dest": "DUS",
        "InterviewerID": 1008
    }
]    

 `;