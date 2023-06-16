let interview_data_raw = `[
    {
        "InterviewId": "1d885a9c-0875-4e15-b490-0b6419bb54ae",
        "InterviewEndDate": "2023-06-09 10:22:19",
        "InterviewState": "Completed",
        "Flight": "4M 0852",
        "Dest": "AYT",
        "InterviewerID": 999,
        "download_time": "16-06-2023 10:11:05"
    },
    {
        "InterviewId": "66aab6a1-a385-4c29-9c30-aaef5d178d19",
        "InterviewEndDate": "2023-06-16 10:50:32",
        "InterviewState": "Completed",
        "Flight": "A3 0437",
        "Dest": "HER",
        "InterviewerID": 999
    },
    {
        "InterviewId": "07ef4cf4-bdf4-42be-8367-a4762271173a",
        "InterviewEndDate": "2023-06-16 11:02:20",
        "InterviewState": "Completed",
        "Flight": "A3 0437",
        "Dest": "HER",
        "InterviewerID": 999
    },
    {
        "InterviewId": "4a362a70-9c9a-4054-8284-b487564bfc06",
        "InterviewEndDate": "2023-06-16 11:00:20",
        "InterviewState": "Completed",
        "Flight": "A3 0861",
        "Dest": "ATH",
        "InterviewerID": 4
    },
    {
        "InterviewId": "19b0cd19-2bb2-4399-ba03-91dc13ccf252",
        "InterviewEndDate": "2023-06-14 13:16:39",
        "InterviewState": "Completed",
        "Flight": "4M 0852",
        "Dest": "AYT",
        "InterviewerID": 999
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
        "InterviewId": "a2b7a3e5-64bf-4190-9fef-965b48cf88c5",
        "InterviewEndDate": "2023-06-14 09:22:15",
        "InterviewState": "Completed",
        "Flight": "KL 1840",
        "Dest": "AMS",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "ef49a386-14b5-48db-a037-f1495cd62da6",
        "InterviewEndDate": "2023-06-15 17:30:28",
        "InterviewState": "Completed",
        "Flight": "OS 0315",
        "Dest": "ARN",
        "InterviewerID": 1002
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
    },
    {
        "InterviewId": "82d822ac-a060-4b28-b383-e368279f1a60",
        "InterviewEndDate": "2023-06-14 09:23:09",
        "InterviewState": "Completed",
        "Flight": "KL 1840",
        "Dest": "AMS",
        "InterviewerID": 8
    },
    {
        "InterviewId": "2d545238-1d61-4aed-89bb-0ee2614067e8",
        "InterviewEndDate": "2023-06-14 09:29:18",
        "InterviewState": "Completed",
        "Flight": "KL 1840",
        "Dest": "AMS",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "ad11ccd6-edf6-4e12-92dc-20518d092484",
        "InterviewEndDate": "2023-06-14 09:23:38",
        "InterviewState": "Completed",
        "Flight": "KL 1840",
        "Dest": "AMS",
        "InterviewerID": 8
    },
    {
        "InterviewId": "2f4df969-0f09-4e08-bd0e-653255887d46",
        "InterviewEndDate": "2023-06-14 09:26:46",
        "InterviewState": "Completed",
        "Flight": "KL 1840",
        "Dest": "AMS",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "7f9e9cf6-49ff-4bbf-a731-c7684355b320",
        "InterviewEndDate": "2023-06-14 09:30:10",
        "InterviewState": "Completed",
        "Flight": "KL 1840",
        "Dest": "AMS",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "7d95a83b-8b6c-4b3e-bc26-8ff2b859aabe",
        "InterviewEndDate": "2023-06-14 09:31:37",
        "InterviewState": "Completed",
        "Flight": "KL 1840",
        "Dest": "AMS",
        "InterviewerID": 8
    },
    {
        "InterviewId": "a6b017cb-076d-456e-8a22-934da24f5508",
        "InterviewEndDate": "2023-06-14 09:53:40",
        "InterviewState": "Completed",
        "Flight": "FR 0488",
        "Dest": "PMI",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "325237d1-b242-4e9f-8c12-2c7883de2fcf",
        "InterviewEndDate": "2023-06-14 09:57:20",
        "InterviewState": "Completed",
        "Flight": "FR 0488",
        "Dest": "PMI",
        "InterviewerID": 8
    },
    {
        "InterviewId": "a878b6db-6ef2-49c8-b63f-6c65fc5ee46d",
        "InterviewEndDate": "2023-06-14 09:56:09",
        "InterviewState": "Completed",
        "Flight": "FR 0488",
        "Dest": "PMI",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "f142e53f-c6e6-4306-bfb5-849f3ae977d9",
        "InterviewEndDate": "2023-06-14 10:02:18",
        "InterviewState": "Completed",
        "Flight": "FR 0488",
        "Dest": "PMI",
        "InterviewerID": 8
    },
    {
        "InterviewId": "be6b9c63-5278-4358-9259-7fb1201a4e4a",
        "InterviewEndDate": "2023-06-14 10:21:42",
        "InterviewState": "Completed",
        "Flight": "FR 4767",
        "Dest": "BLQ",
        "InterviewerID": 8
    },
    {
        "InterviewId": "44df52ce-b9f6-4bda-804c-6d1ac85ec60b",
        "InterviewEndDate": "2023-06-14 10:17:47",
        "InterviewState": "Completed",
        "Flight": "KM 0515",
        "Dest": "MLA",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "125e5335-389c-451c-8ccd-1e4c5044ea12",
        "InterviewEndDate": "2023-06-14 10:21:20",
        "InterviewState": "Completed",
        "Flight": "KM 0515",
        "Dest": "MLA",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "9ab743ff-179d-471f-b67c-820e5a54c630",
        "InterviewEndDate": "2023-06-14 10:23:09",
        "InterviewState": "Completed",
        "Flight": "KM 0515",
        "Dest": "MLA",
        "InterviewerID": 8
    },
    {
        "InterviewId": "0593f1fd-4e27-4c7c-99f5-5dbf50e8b49f",
        "InterviewEndDate": "2023-06-14 10:23:19",
        "InterviewState": "Completed",
        "Flight": "KM 0515",
        "Dest": "MLA",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "b3d9338b-15d4-45a6-aff7-5f2bfe7e9868",
        "InterviewEndDate": "2023-06-16 10:54:12",
        "InterviewState": "Completed",
        "Flight": "A3 0437",
        "Dest": "HER",
        "InterviewerID": 999
    },
    {
        "InterviewId": "346f68e1-2420-42f8-867f-91771e866d3f",
        "InterviewEndDate": "2023-06-14 10:26:04",
        "InterviewState": "Completed",
        "Flight": "KM 0515",
        "Dest": "MLA",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "dfc509d7-f288-403f-934a-637aa2d2accc",
        "InterviewEndDate": "2023-06-14 10:28:16",
        "InterviewState": "Completed",
        "Flight": "KM 0515",
        "Dest": "MLA",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "7a555693-2488-463d-b30a-ae987e9099a0",
        "InterviewEndDate": "2023-06-14 10:40:55",
        "InterviewState": "Completed",
        "Flight": "A3 0861",
        "Dest": "ATH",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "4a1dca70-2eff-4880-961f-53a522dc5dd2",
        "InterviewEndDate": "2023-06-14 10:44:52",
        "InterviewState": "Completed",
        "Flight": "A3 0861",
        "Dest": "ATH",
        "InterviewerID": 8
    },
    {
        "InterviewId": "ac2ca940-3926-4d0c-a4c7-d38aa77b40cd",
        "InterviewEndDate": "2023-06-14 10:36:42",
        "InterviewState": "Completed",
        "Flight": "A3 0861",
        "Dest": "ATH",
        "InterviewerID": 8
    },
    {
        "InterviewId": "99876d2c-eb4a-400a-bbda-1b83660870db",
        "InterviewEndDate": "2023-06-14 10:38:32",
        "InterviewState": "Completed",
        "Flight": "A3 0861",
        "Dest": "ATH",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "504b5dec-0ee2-4e17-bf8b-e237d128c6b2",
        "InterviewEndDate": "2023-06-14 10:47:25",
        "InterviewState": "Completed",
        "Flight": "A3 0861",
        "Dest": "ATH",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "34658f7b-efa1-46c4-84a0-b65437ee9313",
        "InterviewEndDate": "2023-06-14 10:46:07",
        "InterviewState": "Completed",
        "Flight": "A3 0861",
        "Dest": "ATH",
        "InterviewerID": 8
    },
    {
        "InterviewId": "47f27a72-1ae7-4ce5-b384-ae780c8fadb8",
        "InterviewEndDate": "2023-06-14 11:08:58",
        "InterviewState": "Completed",
        "Flight": "FR 1645",
        "Dest": "FCO",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "600d6be3-279e-4dfa-98cb-dd9c4d3e964c",
        "InterviewEndDate": "2023-06-14 11:07:23",
        "InterviewState": "Completed",
        "Flight": "FR 1645",
        "Dest": "FCO",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "e3790c3d-7eb1-4e61-8ba2-058e205d3a7d",
        "InterviewEndDate": "2023-06-14 11:14:50",
        "InterviewState": "Completed",
        "Flight": "FR 1645",
        "Dest": "FCO",
        "InterviewerID": 8
    },
    {
        "InterviewId": "956df056-005e-4d21-9117-2ec2f9773aa7",
        "InterviewEndDate": "2023-06-14 11:03:47",
        "InterviewState": "Completed",
        "Flight": "FR 1645",
        "Dest": "FCO",
        "InterviewerID": 8
    },
    {
        "InterviewId": "d1f7e6d4-e520-4097-a52b-f23cf61a4f88",
        "InterviewEndDate": "2023-06-14 11:12:50",
        "InterviewState": "Completed",
        "Flight": "FR 1645",
        "Dest": "FCO",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "65844302-cca6-48f6-a25c-21551a21f3c6",
        "InterviewEndDate": "2023-06-14 11:14:32",
        "InterviewState": "Completed",
        "Flight": "FR 1645",
        "Dest": "FCO",
        "InterviewerID": 8
    },
    {
        "InterviewId": "45755de0-2a9d-4eee-b940-1b9c68d3f87a",
        "InterviewEndDate": "2023-06-14 11:20:19",
        "InterviewState": "Completed",
        "Flight": "FR 1645",
        "Dest": "FCO",
        "InterviewerID": 8
    },
    {
        "InterviewId": "70c19d72-8fc3-4069-be6d-c8a0c2779890",
        "InterviewEndDate": "2023-06-14 11:38:54",
        "InterviewState": "Completed",
        "Flight": "AY 1472",
        "Dest": "HEL",
        "InterviewerID": 8
    },
    {
        "InterviewId": "c5d2ec14-a153-49d1-a276-15b2bfcd8992",
        "InterviewEndDate": "2023-06-14 11:40:59",
        "InterviewState": "Completed",
        "Flight": "AY 1472",
        "Dest": "HEL",
        "InterviewerID": 8
    },
    {
        "InterviewId": "c3d7b6c3-bb4a-44fe-bfa0-dc5cf47dbb26",
        "InterviewEndDate": "2023-06-14 11:39:11",
        "InterviewState": "Completed",
        "Flight": "AY 1472",
        "Dest": "HEL",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "f4b2daec-45a9-443c-9a13-ef161805483c",
        "InterviewEndDate": "2023-06-14 11:39:40",
        "InterviewState": "Completed",
        "Flight": "AY 1472",
        "Dest": "HEL",
        "InterviewerID": 8
    },
    {
        "InterviewId": "9fa063ca-28d4-4142-90b6-4c61933e161b",
        "InterviewEndDate": "2023-06-14 11:42:16",
        "InterviewState": "Completed",
        "Flight": "AY 1472",
        "Dest": "HEL",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "4de7d839-53da-4bae-b91d-9bca72aa28e9",
        "InterviewEndDate": "2023-06-14 11:50:51",
        "InterviewState": "Completed",
        "Flight": "AY 1472",
        "Dest": "HEL",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "3e5ad229-ad8a-4376-ab71-45956514a7b7",
        "InterviewEndDate": "2023-06-14 12:05:32",
        "InterviewState": "Completed",
        "Flight": "FR 0500",
        "Dest": "PMI",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "a53ca1fd-1dfb-4c5e-a03c-4d5f3992d208",
        "InterviewEndDate": "2023-06-14 11:50:37",
        "InterviewState": "Completed",
        "Flight": "AY 1472",
        "Dest": "HEL",
        "InterviewerID": 8
    },
    {
        "InterviewId": "6d213160-60ce-41af-9f44-1f54f75c9d9c",
        "InterviewEndDate": "2023-06-14 12:00:23",
        "InterviewState": "Completed",
        "Flight": "FR 0500",
        "Dest": "PMI",
        "InterviewerID": 8
    },
    {
        "InterviewId": "b3cf15c5-ff68-4aff-bf21-2be47c4cf3d4",
        "InterviewEndDate": "2023-06-14 12:00:11",
        "InterviewState": "Completed",
        "Flight": "FR 0500",
        "Dest": "PMI",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "f4e7a912-4dbd-4e10-8378-57b3a629f997",
        "InterviewEndDate": "2023-06-14 12:01:56",
        "InterviewState": "Completed",
        "Flight": "FR 0500",
        "Dest": "PMI",
        "InterviewerID": 8
    },
    {
        "InterviewId": "0495fdb7-6b44-4439-b003-7a7b49343842",
        "InterviewEndDate": "2023-06-14 11:59:19",
        "InterviewState": "Completed",
        "Flight": "FR 0500",
        "Dest": "PMI",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "1d6ced6e-53ba-4dec-ad46-034aee4c30b8",
        "InterviewEndDate": "2023-06-14 13:56:25",
        "InterviewState": "Completed",
        "Flight": "FR 0590",
        "Dest": "AGP",
        "InterviewerID": 8
    },
    {
        "InterviewId": "bb47ba06-83d9-4798-acef-2e57fec53324",
        "InterviewEndDate": "2023-06-14 12:14:05",
        "InterviewState": "Completed",
        "Flight": "FR 0500",
        "Dest": "PMI",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "54db904f-d4eb-4f11-9189-baae121b8c70",
        "InterviewEndDate": "2023-06-14 13:53:52",
        "InterviewState": "Completed",
        "Flight": "FR 0590",
        "Dest": "AGP",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "34bd949a-9f29-4f8f-b0fe-ae84a5975a0d",
        "InterviewEndDate": "2023-06-14 12:08:38",
        "InterviewState": "Completed",
        "Flight": "FR 0500",
        "Dest": "PMI",
        "InterviewerID": 8
    },
    {
        "InterviewId": "9c0613b9-dd2b-4f0c-84b8-2775f7029c0a",
        "InterviewEndDate": "2023-06-14 14:01:18",
        "InterviewState": "Completed",
        "Flight": "FR 0590",
        "Dest": "AGP",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "0259ef2a-b9c2-4243-8289-614f74afa568",
        "InterviewEndDate": "2023-06-14 13:57:11",
        "InterviewState": "Completed",
        "Flight": "FR 0590",
        "Dest": "AGP",
        "InterviewerID": 8
    },
    {
        "InterviewId": "b577256b-c386-4ec5-a9f4-4b6ab0de6616",
        "InterviewEndDate": "2023-06-14 13:21:08",
        "InterviewState": "Completed",
        "Flight": "4M 0852",
        "Dest": "AYT",
        "InterviewerID": 999
    },
    {
        "InterviewId": "88150c0b-3f68-4df1-bce3-047a5c00c78a",
        "InterviewEndDate": "2023-06-14 13:54:05",
        "InterviewState": "Completed",
        "Flight": "FR 0590",
        "Dest": "AGP",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "ba36a2a9-1691-43b4-8b80-ed30bb9890bc",
        "InterviewEndDate": "2023-06-14 14:05:09",
        "InterviewState": "Completed",
        "Flight": "FR 0590",
        "Dest": "AGP",
        "InterviewerID": 8
    },
    {
        "InterviewId": "b3c8534a-ca57-459a-b843-80a4e548f9e7",
        "InterviewEndDate": "2023-06-14 14:08:46",
        "InterviewState": "Completed",
        "Flight": "DE 1482",
        "Dest": "HER",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "2596482c-6cf7-4d12-ace0-cb054df168ac",
        "InterviewEndDate": "2023-06-14 14:07:00",
        "InterviewState": "Completed",
        "Flight": "DE 1482",
        "Dest": "HER",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "e374140a-294e-4128-8bb6-f73f8d19951d",
        "InterviewEndDate": "2023-06-14 14:15:22",
        "InterviewState": "Completed",
        "Flight": "DE 1482",
        "Dest": "HER",
        "InterviewerID": 8
    },
    {
        "InterviewId": "d0ae6e69-5913-4fa6-805e-35652d0af13b",
        "InterviewEndDate": "2023-06-14 14:13:54",
        "InterviewState": "Completed",
        "Flight": "DE 1482",
        "Dest": "HER",
        "InterviewerID": 8
    },
    {
        "InterviewId": "978be109-7895-4a59-8646-720df07bd1e0",
        "InterviewEndDate": "2023-06-14 14:21:52",
        "InterviewState": "Completed",
        "Flight": "W6 2849",
        "Dest": "NCE",
        "InterviewerID": 8
    },
    {
        "InterviewId": "bbf629e7-00f3-4fde-94dc-f3d037c31d1c",
        "InterviewEndDate": "2023-06-14 14:20:11",
        "InterviewState": "Completed",
        "Flight": "W6 2849",
        "Dest": "NCE",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "4af2f27c-1a64-42f0-850d-ee05f3904b67",
        "InterviewEndDate": "2023-06-14 14:25:34",
        "InterviewState": "Completed",
        "Flight": "W6 2849",
        "Dest": "NCE",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "f596ea2d-130c-4bcf-8bcd-71c673c67780",
        "InterviewEndDate": "2023-06-14 14:37:43",
        "InterviewState": "Completed",
        "Flight": "FR 0687",
        "Dest": "EIN",
        "InterviewerID": 8
    },
    {
        "InterviewId": "02867c73-5923-4e53-b264-c4ff88ba8ea8",
        "InterviewEndDate": "2023-06-14 14:25:57",
        "InterviewState": "Completed",
        "Flight": "W6 2849",
        "Dest": "NCE",
        "InterviewerID": 8
    },
    {
        "InterviewId": "e09d613b-1f6f-425c-8c0c-e02b72e627cc",
        "InterviewEndDate": "2023-06-14 15:16:53",
        "InterviewState": "Completed",
        "Flight": "FR 0687",
        "Dest": "EIN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "93ddd245-c8de-4a82-a288-81211ac3fe81",
        "InterviewEndDate": "2023-06-14 14:40:27",
        "InterviewState": "Completed",
        "Flight": "FR 0687",
        "Dest": "EIN",
        "InterviewerID": 8
    },
    {
        "InterviewId": "be72c45e-c2f8-4a2d-9210-0642759536c5",
        "InterviewEndDate": "2023-06-14 14:37:05",
        "InterviewState": "Completed",
        "Flight": "FR 0687",
        "Dest": "EIN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "64874662-4b17-4df6-920d-9d7079207084",
        "InterviewEndDate": "2023-06-14 15:23:50",
        "InterviewState": "Completed",
        "Flight": "FR 0689",
        "Dest": "MAD",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "fc52f7dc-f593-4fec-9749-6f637435faa8",
        "InterviewEndDate": "2023-06-14 15:31:42",
        "InterviewState": "Completed",
        "Flight": "FR 0689",
        "Dest": "MAD",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "762e20f0-6a43-4b48-a06a-d0cef6ed3dfa",
        "InterviewEndDate": "2023-06-14 15:31:25",
        "InterviewState": "Completed",
        "Flight": "FR 0689",
        "Dest": "MAD",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "d4a3a32c-c973-443d-ac8f-477a2822a041",
        "InterviewEndDate": "2023-06-14 15:32:46",
        "InterviewState": "Completed",
        "Flight": "FR 0689",
        "Dest": "MAD",
        "InterviewerID": 8
    },
    {
        "InterviewId": "ab01fc85-dd9d-43b2-971f-916c34ce19e4",
        "InterviewEndDate": "2023-06-14 15:33:23",
        "InterviewState": "Completed",
        "Flight": "FR 0689",
        "Dest": "MAD",
        "InterviewerID": 8
    },
    {
        "InterviewId": "97a6c55f-128b-4eff-a5bc-877b46ffb29e",
        "InterviewEndDate": "2023-06-14 15:31:16",
        "InterviewState": "Completed",
        "Flight": "FR 0689",
        "Dest": "MAD",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "7335c165-0d70-46d2-88ec-5755ad842947",
        "InterviewEndDate": "2023-06-14 15:40:01",
        "InterviewState": "Completed",
        "Flight": "FR 0689",
        "Dest": "MAD",
        "InterviewerID": 8
    },
    {
        "InterviewId": "7a17436d-0f1e-4566-9e5b-dca39519fae7",
        "InterviewEndDate": "2023-06-15 14:49:02",
        "InterviewState": "Completed",
        "Flight": "OS 0435",
        "Dest": "PMI",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "96aa6699-d80a-4665-bf76-b678256ebb10",
        "InterviewEndDate": "2023-06-15 14:51:32",
        "InterviewState": "Completed",
        "Flight": "OS 0435",
        "Dest": "PMI",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "fc1c3289-28e6-4056-8759-fbf1689f926d",
        "InterviewEndDate": "2023-06-15 14:49:55",
        "InterviewState": "Completed",
        "Flight": "OS 0435",
        "Dest": "PMI",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "bc8cb0d2-ca96-43bf-849f-f8725561d7ff",
        "InterviewEndDate": "2023-06-15 14:44:59",
        "InterviewState": "Completed",
        "Flight": "OS 0435",
        "Dest": "PMI",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "8c36e211-bb64-482a-a7eb-9d8e9658f16c",
        "InterviewEndDate": "2023-06-15 14:48:17",
        "InterviewState": "Completed",
        "Flight": "OS 0435",
        "Dest": "PMI",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "2d6db585-156f-4ab2-b72c-230427ef7d6a",
        "InterviewEndDate": "2023-06-16 11:04:28",
        "InterviewState": "Completed",
        "Flight": "EI 0661",
        "Dest": "DUB",
        "InterviewerID": 1007
    },
    {
        "InterviewId": "61a193d6-1772-412b-b224-fee835176bf6",
        "InterviewEndDate": "2023-06-16 10:53:34",
        "InterviewState": "Completed",
        "Flight": "EI 0661",
        "Dest": "DUB",
        "InterviewerID": 1007
    },
    {
        "InterviewId": "d7fb7937-f11e-40e8-8da1-c55619a45a8a",
        "InterviewEndDate": "2023-06-16 11:02:11",
        "InterviewState": "Completed",
        "Flight": "EI 0661",
        "Dest": "DUB",
        "InterviewerID": 1007
    },
    {
        "InterviewId": "3a2efcf4-4081-44e3-8859-55df04ee74ae",
        "InterviewEndDate": "2023-06-15 14:57:51",
        "InterviewState": "Completed",
        "Flight": "OS 0435",
        "Dest": "PMI",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "25b25605-b80c-4a1e-b815-bfe43dad0909",
        "InterviewEndDate": "2023-06-15 15:01:17",
        "InterviewState": "Completed",
        "Flight": "OS 0435",
        "Dest": "PMI",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "8d314603-2f14-4a8f-95a7-601e460f5c09",
        "InterviewEndDate": "2023-06-15 15:11:03",
        "InterviewState": "Completed",
        "Flight": "OS 9001",
        "Dest": "HER",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "47a72eab-20ab-45a9-9e31-91991624af39",
        "InterviewEndDate": "2023-06-15 15:12:54",
        "InterviewState": "Completed",
        "Flight": "OS 9001",
        "Dest": "HER",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "ed28b4ef-482d-48b4-b722-b18d1a192e71",
        "InterviewEndDate": "2023-06-15 15:45:01",
        "InterviewState": "Completed",
        "Flight": "OS 0963",
        "Dest": "GRZ",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "f469fe01-eee4-4331-a5ad-d5984fa4e414",
        "InterviewEndDate": "2023-06-15 15:14:34",
        "InterviewState": "Completed",
        "Flight": "OS 9001",
        "Dest": "HER",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "1b9a064c-ff3b-45ea-93e0-69ff16759345",
        "InterviewEndDate": "2023-06-15 15:12:54",
        "InterviewState": "Completed",
        "Flight": "OS 9001",
        "Dest": "HER",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "907a1374-cdbc-435a-a648-89ed4704ae00",
        "InterviewEndDate": "2023-06-15 15:49:30",
        "InterviewState": "Completed",
        "Flight": "OS 0963",
        "Dest": "GRZ",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "ae109a1c-f8de-46c9-827d-cb8ebd4e8460",
        "InterviewEndDate": "2023-06-15 15:42:22",
        "InterviewState": "Completed",
        "Flight": "OS 0963",
        "Dest": "GRZ",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "11355871-e5b6-4143-b911-a181d7cd3534",
        "InterviewEndDate": "2023-06-15 15:30:05",
        "InterviewState": "Completed",
        "Flight": "EW 9751",
        "Dest": "DUS",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "a86b4cd1-96df-44bc-87ed-61252bc2dc7b",
        "InterviewEndDate": "2023-06-15 15:42:06",
        "InterviewState": "Completed",
        "Flight": "OS 0963",
        "Dest": "GRZ",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "976a5a15-1430-48ed-b304-2cc4d4a0eba3",
        "InterviewEndDate": "2023-06-15 16:01:42",
        "InterviewState": "Completed",
        "Flight": "OS 0231",
        "Dest": "BER",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "f25965d7-7101-4c6d-8597-8a815f00e27c",
        "InterviewEndDate": "2023-06-15 16:03:08",
        "InterviewState": "Completed",
        "Flight": "OS 0231",
        "Dest": "BER",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "a5f94140-2b3b-40f7-97fc-7bc21788d879",
        "InterviewEndDate": "2023-06-15 16:01:12",
        "InterviewState": "Completed",
        "Flight": "OS 0231",
        "Dest": "BER",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "2d581ab8-9527-4ef2-a282-036c38cf655f",
        "InterviewEndDate": "2023-06-15 16:02:51",
        "InterviewState": "Completed",
        "Flight": "OS 0231",
        "Dest": "BER",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "ed0a94de-c64c-4b22-9186-a04ae027b100",
        "InterviewEndDate": "2023-06-15 16:03:23",
        "InterviewState": "Completed",
        "Flight": "OS 0233",
        "Dest": "BER",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "3d63f221-c4a4-4b8e-a82e-ec73db4d07ee",
        "InterviewEndDate": "2023-06-15 16:11:54",
        "InterviewState": "Completed",
        "Flight": "OS 0231",
        "Dest": "BER",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "d63c8f06-55a6-45cd-a703-92c3f8308493",
        "InterviewEndDate": "2023-06-15 16:22:28",
        "InterviewState": "Completed",
        "Flight": "OS 0159",
        "Dest": "DUS",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "27e503e8-9f34-42a4-a921-5d3c1885966b",
        "InterviewEndDate": "2023-06-15 16:19:02",
        "InterviewState": "Completed",
        "Flight": "OS 0159",
        "Dest": "DUS",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "79dfcfc0-b51c-4a66-8e84-5a5c31a27861",
        "InterviewEndDate": "2023-06-15 16:37:45",
        "InterviewState": "Completed",
        "Flight": "EW 2755",
        "Dest": "STR",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "b143a9d1-b29e-4118-a227-ea3278b16cba",
        "InterviewEndDate": "2023-06-15 16:39:04",
        "InterviewState": "Completed",
        "Flight": "EW 2755",
        "Dest": "STR",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "7650c8e7-88fb-405a-b3fc-36e356fb1474",
        "InterviewEndDate": "2023-06-15 16:24:41",
        "InterviewState": "Completed",
        "Flight": "OS 0159",
        "Dest": "DUS",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "1aae3632-f0f9-46db-b925-5b976ccf2a8a",
        "InterviewEndDate": "2023-06-15 16:27:34",
        "InterviewState": "Completed",
        "Flight": "OS 0159",
        "Dest": "DUS",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "bb9eb76f-3476-425b-bc7c-851d838725f5",
        "InterviewEndDate": "2023-06-15 16:38:42",
        "InterviewState": "Completed",
        "Flight": "EW 2755",
        "Dest": "STR",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "08b6fa62-87fe-4b93-a608-1b779a28b086",
        "InterviewEndDate": "2023-06-15 16:34:38",
        "InterviewState": "Completed",
        "Flight": "EW 2755",
        "Dest": "STR",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "a93c113e-c375-4a2b-87e3-3f43f01b2c00",
        "InterviewEndDate": "2023-06-15 16:55:08",
        "InterviewState": "Completed",
        "Flight": "EW 0753",
        "Dest": "CGN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "9f3ab387-d227-4376-9d18-4c2b556ac000",
        "InterviewEndDate": "2023-06-15 16:54:00",
        "InterviewState": "Completed",
        "Flight": "EW 0753",
        "Dest": "CGN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "2309679f-abfa-4de1-a32c-1f4039074882",
        "InterviewEndDate": "2023-06-15 16:58:08",
        "InterviewState": "Completed",
        "Flight": "EW 0753",
        "Dest": "CGN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "8dcb4c9c-a234-42b3-b8ad-fac3385fe11b",
        "InterviewEndDate": "2023-06-15 16:57:27",
        "InterviewState": "Completed",
        "Flight": "EW 0753",
        "Dest": "CGN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "df6921f5-01f2-45bf-a2dd-7f1650f41215",
        "InterviewEndDate": "2023-06-15 16:52:50",
        "InterviewState": "Completed",
        "Flight": "EW 0753",
        "Dest": "CGN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "5adc5908-6184-4f95-bc42-32b7e59f1483",
        "InterviewEndDate": "2023-06-15 17:00:08",
        "InterviewState": "Completed",
        "Flight": "EW 0753",
        "Dest": "CGN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "43f7b716-6eb8-42ca-800f-9d2b6bef04ed",
        "InterviewEndDate": "2023-06-15 17:13:14",
        "InterviewState": "Completed",
        "Flight": "OS 0315",
        "Dest": "ARN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "80596dff-8fcb-4e47-97c1-87d04d876af6",
        "InterviewEndDate": "2023-06-15 17:10:32",
        "InterviewState": "Completed",
        "Flight": "OS 0315",
        "Dest": "ARN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "948778e1-2033-4b67-b655-de0ffb50b9ae",
        "InterviewEndDate": "2023-06-15 17:12:38",
        "InterviewState": "Completed",
        "Flight": "OS 0315",
        "Dest": "ARN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "d23a1656-fd1e-4967-bb35-829de1b802ed",
        "InterviewEndDate": "2023-06-15 17:43:53",
        "InterviewState": "Completed",
        "Flight": "OS 0315",
        "Dest": "ARN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "ad357d07-5fde-4bb6-b7f0-dde12de6047c",
        "InterviewEndDate": "2023-06-15 19:38:09",
        "InterviewState": "Completed",
        "Flight": "LO 0226",
        "Dest": "WAW",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "52a6abfa-56d3-4cab-af49-dbc5250b7435",
        "InterviewEndDate": "2023-06-15 17:52:05",
        "InterviewState": "Completed",
        "Flight": "OS 0393",
        "Dest": "BCN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "523c5fe6-e27f-4f4f-a42a-37ed05f2bae0",
        "InterviewEndDate": "2023-06-15 17:35:41",
        "InterviewState": "Completed",
        "Flight": "OS 0315",
        "Dest": "ARN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "b06b1116-c49f-48c2-a473-d2a638ad3745",
        "InterviewEndDate": "2023-06-15 17:27:33",
        "InterviewState": "Completed",
        "Flight": "OS 0315",
        "Dest": "ARN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "57ed9a73-2495-476f-acd0-a49907e1b9dd",
        "InterviewEndDate": "2023-06-15 17:46:02",
        "InterviewState": "Completed",
        "Flight": "OS 0393",
        "Dest": "BCN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "8d4fcdc1-c19e-4cf1-a379-c9ff174c4c56",
        "InterviewEndDate": "2023-06-15 17:46:04",
        "InterviewState": "Completed",
        "Flight": "OS 0393",
        "Dest": "BCN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "3efa4a3a-3fa3-43d4-9071-d9183e5e535c",
        "InterviewEndDate": "2023-06-15 17:40:20",
        "InterviewState": "Completed",
        "Flight": "OS 0393",
        "Dest": "BCN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "265e9ef9-c4f5-44ed-bb85-26da0774ce55",
        "InterviewEndDate": "2023-06-15 17:52:29",
        "InterviewState": "Completed",
        "Flight": "OS 0393",
        "Dest": "BCN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "5c96af8f-a2b4-44f1-9f30-f32f2ca695ac",
        "InterviewEndDate": "2023-06-15 17:55:55",
        "InterviewState": "Completed",
        "Flight": "OS 0393",
        "Dest": "BCN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "bbce37d5-f9ee-43b4-85c2-73b8898088d0",
        "InterviewEndDate": "2023-06-15 17:58:28",
        "InterviewState": "Completed",
        "Flight": "OS 0631",
        "Dest": "WAW",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "515741c1-eeaa-46c4-ac7d-881a3b97c188",
        "InterviewEndDate": "2023-06-15 17:57:34",
        "InterviewState": "Completed",
        "Flight": "OS 0631",
        "Dest": "WAW",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "c55b0d61-5861-4323-bf36-107162539397",
        "InterviewEndDate": "2023-06-15 18:06:23",
        "InterviewState": "Completed",
        "Flight": "OS 0265",
        "Dest": "NUE",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "c90c6e26-7eba-4387-8dfc-1f2bf4e11ab4",
        "InterviewEndDate": "2023-06-15 18:26:21",
        "InterviewState": "Completed",
        "Flight": "OS 0253",
        "Dest": "LEJ",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "a3394fab-0d3d-4e93-b961-2cfab68a5f64",
        "InterviewEndDate": "2023-06-15 18:08:28",
        "InterviewState": "Completed",
        "Flight": "OS 0265",
        "Dest": "NUE",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "3ff3e665-b618-4986-a770-5cdeffb5b96a",
        "InterviewEndDate": "2023-06-15 18:09:20",
        "InterviewState": "Completed",
        "Flight": "OS 0265",
        "Dest": "NUE",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "0bb02095-bd58-4d8b-9a2f-16e360373119",
        "InterviewEndDate": "2023-06-15 18:08:29",
        "InterviewState": "Completed",
        "Flight": "OS 0265",
        "Dest": "NUE",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "30daee54-7f26-4e72-9a4c-3a75be5a3161",
        "InterviewEndDate": "2023-06-15 18:21:50",
        "InterviewState": "Completed",
        "Flight": "OS 0253",
        "Dest": "LEJ",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "b07a6618-cc08-4e45-afc9-807a1e8f7ae8",
        "InterviewEndDate": "2023-06-15 18:23:38",
        "InterviewState": "Completed",
        "Flight": "OS 0253",
        "Dest": "LEJ",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "395afed3-6729-4849-9cc3-05aed03b1f52",
        "InterviewEndDate": "2023-06-15 18:29:45",
        "InterviewState": "Completed",
        "Flight": "OS 0253",
        "Dest": "LEJ",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "b876b6dc-7e2e-49b2-b848-d3e981645afc",
        "InterviewEndDate": "2023-06-15 19:33:05",
        "InterviewState": "Completed",
        "Flight": "LO 0226",
        "Dest": "WAW",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "8b8aea72-67f2-4d99-9065-a717f137ed61",
        "InterviewEndDate": "2023-06-15 19:35:48",
        "InterviewState": "Completed",
        "Flight": "LO 0226",
        "Dest": "WAW",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "e8c35c03-6f01-4277-86e9-b8a389008105",
        "InterviewEndDate": "2023-06-15 19:56:46",
        "InterviewState": "Completed",
        "Flight": "OS 0117",
        "Dest": "MUC",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "787b1eae-628a-487e-8a48-5ed433e2d1dc",
        "InterviewEndDate": "2023-06-15 19:36:39",
        "InterviewState": "Completed",
        "Flight": "LO 0226",
        "Dest": "WAW",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "a7934839-5626-45a3-8edc-d088ae9ee62e",
        "InterviewEndDate": "2023-06-15 19:49:55",
        "InterviewState": "Completed",
        "Flight": "OS 0117",
        "Dest": "MUC",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "2f24037e-aa17-4400-8d26-68ecb699d498",
        "InterviewEndDate": "2023-06-15 20:00:57",
        "InterviewState": "Completed",
        "Flight": "OS 0117",
        "Dest": "MUC",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "175ed58e-efc7-414f-b977-2cbb175ab615",
        "InterviewEndDate": "2023-06-15 19:55:03",
        "InterviewState": "Completed",
        "Flight": "OS 0117",
        "Dest": "MUC",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "ccc151ca-2b67-4dcf-a5f3-fbeb1c6ffe85",
        "InterviewEndDate": "2023-06-15 19:53:06",
        "InterviewState": "Completed",
        "Flight": "OS 0117",
        "Dest": "MUC",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "31eb5e29-2c39-492a-b212-642950c8a7c1",
        "InterviewEndDate": "2023-06-15 20:01:44",
        "InterviewState": "Completed",
        "Flight": "OS 0117",
        "Dest": "MUC",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "3922a139-58fb-429b-b028-bb625f7a7278",
        "InterviewEndDate": "2023-06-15 20:11:25",
        "InterviewState": "Completed",
        "Flight": "EW 9753",
        "Dest": "DUS",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "3639c4a7-1eb7-40a3-8a25-989e4be1421a",
        "InterviewEndDate": "2023-06-15 20:12:30",
        "InterviewState": "Completed",
        "Flight": "EW 0755",
        "Dest": "CGN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "28d38860-8fdb-40f3-871c-fe3579b2545c",
        "InterviewEndDate": "2023-06-15 20:17:04",
        "InterviewState": "Completed",
        "Flight": "EW 0755",
        "Dest": "CGN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "d00dbfdc-2c85-4a00-8c2c-944372196824",
        "InterviewEndDate": "2023-06-15 20:19:04",
        "InterviewState": "Completed",
        "Flight": "EW 0755",
        "Dest": "CGN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "bd7035ee-6e1b-49b4-bb77-1e3d947655d4",
        "InterviewEndDate": "2023-06-15 20:12:25",
        "InterviewState": "Completed",
        "Flight": "EW 0755",
        "Dest": "CGN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "72d4ffec-521e-417a-916c-7c685fdb1621",
        "InterviewEndDate": "2023-06-15 20:21:49",
        "InterviewState": "Completed",
        "Flight": "EW 0755",
        "Dest": "CGN",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "55728b7c-a9cd-47c4-96a4-85eb76536278",
        "InterviewEndDate": "2023-06-15 20:37:47",
        "InterviewState": "Completed",
        "Flight": "OS 0527",
        "Dest": "VCE",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "0dfa016d-7ba9-4b50-a79b-6f18a60dc27e",
        "InterviewEndDate": "2023-06-15 20:26:40",
        "InterviewState": "Completed",
        "Flight": "EW 0755",
        "Dest": "CGN",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "60a636f2-9056-4b96-85ec-a8bf4a833787",
        "InterviewEndDate": "2023-06-15 20:39:52",
        "InterviewState": "Completed",
        "Flight": "OS 0527",
        "Dest": "VCE",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "73f2ed5f-b68d-4726-94e8-f520179e56cb",
        "InterviewEndDate": "2023-06-15 20:43:18",
        "InterviewState": "Completed",
        "Flight": "OS 0527",
        "Dest": "VCE",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "df6b194e-7435-4cf1-8673-5e1f7fc82401",
        "InterviewEndDate": "2023-06-15 20:33:27",
        "InterviewState": "Completed",
        "Flight": "OS 0527",
        "Dest": "VCE",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "8b91da7b-2dc9-46e5-81d0-c73f1470e889",
        "InterviewEndDate": "2023-06-15 20:36:48",
        "InterviewState": "Completed",
        "Flight": "OS 0527",
        "Dest": "VCE",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "7830a9dc-adea-43d1-a320-1b3d9a472d6a",
        "InterviewEndDate": "2023-06-15 20:55:24",
        "InterviewState": "Completed",
        "Flight": "OS 0517",
        "Dest": "MXP",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "69c4bcd5-9505-4d3f-afa7-bedf7ec65580",
        "InterviewEndDate": "2023-06-15 20:48:10",
        "InterviewState": "Completed",
        "Flight": "OS 0517",
        "Dest": "MXP",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "250136a7-c003-4fb1-a8e2-8a6c2ac01ffd",
        "InterviewEndDate": "2023-06-15 20:49:53",
        "InterviewState": "Completed",
        "Flight": "OS 0517",
        "Dest": "MXP",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "bf1a8f50-4361-4012-8744-2abe9c7e0df5",
        "InterviewEndDate": "2023-06-15 20:54:54",
        "InterviewState": "Completed",
        "Flight": "OS 0517",
        "Dest": "MXP",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "08e98d41-e87a-47cd-8154-8de83c0ac4ff",
        "InterviewEndDate": "2023-06-15 21:00:02",
        "InterviewState": "Completed",
        "Flight": "OS 0517",
        "Dest": "MXP",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "a9ff8ed8-5d1e-47b4-9203-6a9adc9d7a96",
        "InterviewEndDate": "2023-06-15 21:11:35",
        "InterviewState": "Completed",
        "Flight": "OS 0239",
        "Dest": "BER",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "9afdedf2-6ee0-4b48-b290-05cd33f3fe55",
        "InterviewEndDate": "2023-06-15 21:10:41",
        "InterviewState": "Completed",
        "Flight": "OS 0239",
        "Dest": "BER",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "e6aa4dd2-1c3f-4578-859c-0f86c2b38381",
        "InterviewEndDate": "2023-06-15 21:12:53",
        "InterviewState": "Completed",
        "Flight": "OS 0239",
        "Dest": "BER",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "de0e1234-d774-4859-8781-ac6feb4cdeca",
        "InterviewEndDate": "2023-06-15 21:10:01",
        "InterviewState": "Completed",
        "Flight": "OS 0239",
        "Dest": "BER",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "c68a0a5c-3561-4086-a779-87469d8424b9",
        "InterviewEndDate": "2023-06-15 21:12:17",
        "InterviewState": "Completed",
        "Flight": "OS 0239",
        "Dest": "BER",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "589f374d-a99a-4f7e-9f63-0ce3d74a3ecc",
        "InterviewEndDate": "2023-06-15 21:19:52",
        "InterviewState": "Completed",
        "Flight": "OS 0239",
        "Dest": "BER",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "be8eab1b-3716-4eba-b722-879f6b816a53",
        "InterviewEndDate": "2023-06-15 21:28:57",
        "InterviewState": "Completed",
        "Flight": "OS 0627",
        "Dest": "WAW",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "a73f8340-7f21-49c9-ae18-97c46d0e07d2",
        "InterviewEndDate": "2023-06-15 21:20:00",
        "InterviewState": "Completed",
        "Flight": "OS 0239",
        "Dest": "BER",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "7f5a8794-681b-4322-a715-d688727d6d8c",
        "InterviewEndDate": "2023-06-15 21:30:44",
        "InterviewState": "Completed",
        "Flight": "OS 0627",
        "Dest": "WAW",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "c881cd1e-bec0-4ea9-9fd6-f2113f19a0ba",
        "InterviewEndDate": "2023-06-15 21:25:33",
        "InterviewState": "Completed",
        "Flight": "OS 0627",
        "Dest": "WAW",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "adfbebb7-f87f-4cf1-afd9-8fca4b065ac8",
        "InterviewEndDate": "2023-06-15 21:43:19",
        "InterviewState": "Completed",
        "Flight": "OS 0717",
        "Dest": "BUD",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "75189c42-3ce6-40a4-ba86-952f05cdf575",
        "InterviewEndDate": "2023-06-15 21:33:55",
        "InterviewState": "Completed",
        "Flight": "OS 0627",
        "Dest": "WAW",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "ede7833d-b7f1-473f-b9f3-18bc55b0e102",
        "InterviewEndDate": "2023-06-15 21:40:23",
        "InterviewState": "Completed",
        "Flight": "OS 0717",
        "Dest": "BUD",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "8ed1f6c1-0f94-414a-9af2-5c8de3164a94",
        "InterviewEndDate": "2023-06-15 21:44:22",
        "InterviewState": "Completed",
        "Flight": "OS 0717",
        "Dest": "BUD",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "71bd5c98-2c6b-451e-bc7c-a0da1ce9c2a3",
        "InterviewEndDate": "2023-06-15 21:44:25",
        "InterviewState": "Completed",
        "Flight": "OS 0717",
        "Dest": "BUD",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "edb5ddf4-204f-4f58-ab70-cea479a24152",
        "InterviewEndDate": "2023-06-15 21:45:05",
        "InterviewState": "Completed",
        "Flight": "OS 0717",
        "Dest": "BUD",
        "InterviewerID": 1008
    },
    {
        "InterviewId": "92252544-7402-46a8-9f07-0f47758daa69",
        "InterviewEndDate": "2023-06-16 09:26:55",
        "InterviewState": "Completed",
        "Flight": "FR 0699",
        "Dest": "ATH",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "a15d49b2-14ba-45e0-bd15-2af93a898478",
        "InterviewEndDate": "2023-06-16 10:58:59",
        "InterviewState": "Completed",
        "Flight": "EI 0661",
        "Dest": "DUB",
        "InterviewerID": 1007
    },
    {
        "InterviewId": "fa124f20-d2c5-44d4-99b9-e193c451499a",
        "InterviewEndDate": "2023-06-16 10:03:55",
        "InterviewState": "Completed",
        "Flight": "XQ 0199",
        "Dest": "AYT",
        "InterviewerID": 999
    },
    {
        "InterviewId": "c8108402-4c64-4c9f-b053-e4150c5b3416",
        "InterviewEndDate": "2023-06-16 09:37:35",
        "InterviewState": "Completed",
        "Flight": "FR 0699",
        "Dest": "ATH",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "8210410e-e1fe-4042-9616-879fd794cbd4",
        "InterviewEndDate": "2023-06-16 09:25:09",
        "InterviewState": "Completed",
        "Flight": "FR 0699",
        "Dest": "ATH",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "f1f4ac1a-2421-46f0-a69c-96e69670945a",
        "InterviewEndDate": "2023-06-16 09:37:00",
        "InterviewState": "Completed",
        "Flight": "FR 0699",
        "Dest": "ATH",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "a57084be-4637-4f98-be83-0463e1324f89",
        "InterviewEndDate": "2023-06-16 09:34:50",
        "InterviewState": "Completed",
        "Flight": "FR 0699",
        "Dest": "ATH",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "2b947a2e-ee6f-4672-a74d-1d1d45456d64",
        "InterviewEndDate": "2023-06-16 09:44:05",
        "InterviewState": "Completed",
        "Flight": "FR 0699",
        "Dest": "ATH",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "13528616-4dae-4ce3-a448-9cf23d1e4182",
        "InterviewEndDate": "2023-06-16 09:45:53",
        "InterviewState": "Completed",
        "Flight": "FR 0699",
        "Dest": "ATH",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "36507a7d-9a40-4e4d-988d-a38b3e41907e",
        "InterviewEndDate": "2023-06-16 09:55:58",
        "InterviewState": "Completed",
        "Flight": "DY 1633",
        "Dest": "OSL",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "526eddb7-9cde-46f5-8e8a-faff9005c010",
        "InterviewEndDate": "2023-06-16 10:08:01",
        "InterviewState": "Completed",
        "Flight": "DY 1633",
        "Dest": "OSL",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "54fdd25a-f9fa-49cc-9140-346ce8717c2d",
        "InterviewEndDate": "2023-06-16 09:56:03",
        "InterviewState": "Completed",
        "Flight": "DY 1633",
        "Dest": "OSL",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "03d120db-9bf7-40fb-8dd8-0d901de1a26c",
        "InterviewEndDate": "2023-06-16 10:23:19",
        "InterviewState": "Completed",
        "Flight": "FR 7316",
        "Dest": "PMO",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "8fcb968b-3162-4dfd-b14e-6b429fc65b63",
        "InterviewEndDate": "2023-06-16 10:08:22",
        "InterviewState": "Completed",
        "Flight": "DY 1633",
        "Dest": "OSL",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "8ee86f5a-dbc0-4e49-bc73-1cfdc24049df",
        "InterviewEndDate": "2023-06-16 11:01:27",
        "InterviewState": "Completed",
        "Flight": "EI 0661",
        "Dest": "DUB",
        "InterviewerID": 1007
    },
    {
        "InterviewId": "f7755a45-1e0b-42cf-a9b9-7ba31db836d4",
        "InterviewEndDate": "2023-06-16 10:17:45",
        "InterviewState": "Completed",
        "Flight": "FR 7316",
        "Dest": "PMO",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "612c222d-cf9f-4045-9319-c9f638121895",
        "InterviewEndDate": "2023-06-16 10:18:36",
        "InterviewState": "Completed",
        "Flight": "FR 7316",
        "Dest": "PMO",
        "InterviewerID": 1002
    },
    {
        "InterviewId": "ab4dddc1-326d-4a14-a96c-98266d76b62b",
        "InterviewEndDate": "2023-06-16 10:34:22",
        "InterviewState": "Completed",
        "Flight": "FR 7316",
        "Dest": "PMO",
        "InterviewerID": 4
    },
    {
        "InterviewId": "79575bb1-97df-40ff-a8ae-04e82bfc42a1",
        "InterviewEndDate": "2023-06-16 10:43:13",
        "InterviewState": "Completed",
        "Flight": "A3 0437",
        "Dest": "HER",
        "InterviewerID": 999
    },
    {
        "InterviewId": "8c744c17-5b96-43e5-be57-fa22fccedb83",
        "InterviewEndDate": "2023-06-16 10:47:58",
        "InterviewState": "Completed",
        "Flight": "4M 0852",
        "Dest": "AYT",
        "InterviewerID": 999
    },
    {
        "InterviewId": "2371da15-99e8-4189-a07f-3f0d3787e50c",
        "InterviewEndDate": "2023-06-16 10:57:21",
        "InterviewState": "Completed",
        "Flight": "A3 0437",
        "Dest": "HER",
        "InterviewerID": 999
    }
]    

 `;