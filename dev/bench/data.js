window.BENCHMARK_DATA = {
  "lastUpdate": 1794488475042,
  "repoUrl": "https://github.com/dimasd-angga/kasane",
  "entries": {
    "Kasane Rendering Pipeline": [
      {
        "commit": {
          "author": {
            "email": "shizhaoyoujie@gmail.com",
            "name": "Yus314",
            "username": "Yus314"
          },
          "committer": {
            "email": "shizhaoyoujie@gmail.com",
            "name": "Yus314",
            "username": "Yus314"
          },
          "distinct": true,
          "id": "aab05f49729bbce50be52ddcd52c5856c3b54607",
          "message": "diag(gui): oversize-glyph guard + identifying fields in atlas warn",
          "timestamp": "2026-05-10T07:02:22-07:00",
          "tree_id": "ae3d5b4407f46aa8bc664aafa1aa00a202e1fcf6",
          "url": "https://github.com/dimasd-angga/kasane/commit/aab05f49729bbce50be52ddcd52c5856c3b54607"
        },
        "date": 1790477934685,
        "tool": "cargo",
        "benches": [
          {
            "name": "element_construct/plugins_0",
            "value": 3797,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "element_construct/plugins_10",
            "value": 7603,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "flex_layout",
            "value": 671,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "paint/80x24",
            "value": 24093,
            "range": "± 966",
            "unit": "ns/iter"
          },
          {
            "name": "paint/200x60",
            "value": 92974,
            "range": "± 2665",
            "unit": "ns/iter"
          },
          {
            "name": "paint/80x24_realistic",
            "value": 26580,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff/full_redraw",
            "value": 23116,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff/incremental",
            "value": 9602,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff_into/full_redraw",
            "value": 22778,
            "range": "± 836",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff_into/incremental",
            "value": 9576,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "grid_clear/80x24",
            "value": 2835,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "grid_clear/200x60",
            "value": 17714,
            "range": "± 676",
            "unit": "ns/iter"
          },
          {
            "name": "full_frame",
            "value": 41719,
            "range": "± 1770",
            "unit": "ns/iter"
          },
          {
            "name": "draw_message",
            "value": 48110,
            "range": "± 3306",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/10",
            "value": 41778,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/50",
            "value": 41802,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/100",
            "value": 41865,
            "range": "± 1901",
            "unit": "ns/iter"
          },
          {
            "name": "incremental_edit/lines/1",
            "value": 39521,
            "range": "± 1491",
            "unit": "ns/iter"
          },
          {
            "name": "incremental_edit/lines/5",
            "value": 40501,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "message_sequence",
            "value": 47095,
            "range": "± 2109",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/10",
            "value": 54994,
            "range": "± 819",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/100",
            "value": 490970,
            "range": "± 14178",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/500",
            "value": 2584701,
            "range": "± 86918",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_status",
            "value": 2679,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/menu_show_50",
            "value": 48538,
            "range": "± 1961",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/23",
            "value": 21674,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/100",
            "value": 86222,
            "range": "± 555",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/500",
            "value": 454894,
            "range": "± 10019",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_status",
            "value": 425,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/menu_show_50",
            "value": 6246,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/80x24",
            "value": 41056,
            "range": "± 1691",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/200x60",
            "value": 176155,
            "range": "± 4564",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/300x80",
            "value": 332120,
            "range": "± 3831",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/parse_apply_draw/500",
            "value": 3051144,
            "range": "± 43597",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/parse_apply_draw/1000",
            "value": 6254864,
            "range": "± 163914",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/80x24",
            "value": 9644,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/200x60",
            "value": 58619,
            "range": "± 3146",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/300x80",
            "value": 122469,
            "range": "± 4023",
            "unit": "ns/iter"
          },
          {
            "name": "cached_pipeline_dirty_flags/all_dirty",
            "value": 30338,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "cached_pipeline_dirty_flags/menu_select_only",
            "value": 30186,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_cold",
            "value": 17551,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_warm",
            "value": 17625,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_menu_select",
            "value": 17623,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "section_paint_status_only",
            "value": 30300,
            "range": "± 776",
            "unit": "ns/iter"
          },
          {
            "name": "section_paint_menu_select",
            "value": 30191,
            "range": "± 814",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_single_edit",
            "value": 8392,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_all_changed",
            "value": 7107,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "apply_draw_line_comparison",
            "value": 21958,
            "range": "± 732",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_buffer_status/1_line_changed",
            "value": 13871,
            "range": "± 1693",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/full_scan_23_lines",
            "value": 8574,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/incremental_2_dirty",
            "value": 8571,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/incremental_all_dirty",
            "value": 8649,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/23_lines",
            "value": 1395,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/59_lines",
            "value": 1415,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/79_lines",
            "value": 1395,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/realistic_23",
            "value": 1415,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_cursor_only",
            "value": 1414,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/status",
            "value": 1406,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/menu/100_items",
            "value": 5292,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/all_flags/80x24",
            "value": 1404,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/all_flags/300x80",
            "value": 1432,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/full_cold/salsa",
            "value": 44844,
            "range": "± 288817",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/full_cold/legacy",
            "value": 32876,
            "range": "± 599",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/menu_select_warm/salsa",
            "value": 32457,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/menu_select_warm/legacy",
            "value": 30220,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/incremental_edit/salsa",
            "value": 49047,
            "range": "± 47871",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/incremental_edit/legacy",
            "value": 35869,
            "range": "± 2042",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scene/cold",
            "value": 23624,
            "range": "± 412013",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scene/warm",
            "value": 4235,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/80x24",
            "value": 47950,
            "range": "± 267180",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/200x60",
            "value": 154101,
            "range": "± 138863",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/300x80",
            "value": 205606,
            "range": "± 30648",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw/80x24",
            "value": 33002,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw/200x60",
            "value": 177024,
            "range": "± 2425",
            "unit": "ns/iter"
          },
          {
            "name": "present/incremental_1line",
            "value": 16927,
            "range": "± 2415",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw_realistic/80x24",
            "value": 32094,
            "range": "± 1265",
            "unit": "ns/iter"
          },
          {
            "name": "e2e_pipeline/json_to_escape_80x24",
            "value": 153702,
            "range": "± 5031",
            "unit": "ns/iter"
          },
          {
            "name": "e2e_pipeline/json_to_escape_realistic",
            "value": 111855,
            "range": "± 5531",
            "unit": "ns/iter"
          },
          {
            "name": "replay/normal_editing_50msg",
            "value": 3548309,
            "range": "± 15509",
            "unit": "ns/iter"
          },
          {
            "name": "replay/fast_scroll_100msg",
            "value": 15323380,
            "range": "± 318579",
            "unit": "ns/iter"
          },
          {
            "name": "replay/menu_completion_20msg",
            "value": 1279274,
            "range": "± 4070",
            "unit": "ns/iter"
          },
          {
            "name": "replay/mixed_session_200msg",
            "value": 16396352,
            "range": "± 542286",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/bg_instances_80x24",
            "value": 2953,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/row_hash_24rows",
            "value": 31601,
            "range": "± 567",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/row_spans_80cols",
            "value": 277,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/color_resolve_1920cells",
            "value": 1856,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "cm_instantiation/component_new",
            "value": 14825844,
            "range": "± 1252963",
            "unit": "ns/iter"
          },
          {
            "name": "cm_instantiation/component_instantiate",
            "value": 14278,
            "range": "± 1246",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/noop",
            "value": 284,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/add",
            "value": 287,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/echo_string_100",
            "value": 372,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/echo_string_10",
            "value": 372,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/build_gutter_24",
            "value": 3722,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/on_state_changed",
            "value": 510,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/contribute_lines_24",
            "value": 516,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/full_cycle",
            "value": 1033,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/10",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/100",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/1000",
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/10",
            "value": 24,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/100",
            "value": 115,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/1000",
            "value": 815,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/single_text",
            "value": 46,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/gutter_24",
            "value": 1149,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/nested_3x8",
            "value": 1262,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/nested_3x24",
            "value": 3438,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/decode_only_gutter_24",
            "value": 860,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/state_changed_3calls",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/state_changed_6calls",
            "value": 27,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/contribute_lines_24",
            "value": 50,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/full_cycle_state_lines",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/engine_new",
            "value": 1030,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/module_new_noop",
            "value": 222368,
            "range": "± 9982",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/instance_new_noop",
            "value": 483,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "empty_call/wasm_noop",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "empty_call/native_noop",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "integer_call/wasm_add",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "integer_call/native_add",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_import/1x",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_import/10x",
            "value": 35,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cursor_line_plugin/full_cycle",
            "value": 1008,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "cursor_line_plugin/cache_hit_no_call",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "line_numbers_gutter_24",
            "value": 3460,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/1",
            "value": 1003,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/3",
            "value": 3069,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/5",
            "value": 4992,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/10",
            "value": 10085,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/1",
            "value": 12494,
            "range": "± 995",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/5",
            "value": 63042,
            "range": "± 5189",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/10",
            "value": 131005,
            "range": "± 11744",
            "unit": "ns/iter"
          },
          {
            "name": "native_baseline/native_cursor_line_full",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "native_baseline/native_gutter_24",
            "value": 946,
            "range": "± 19",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shizhaoyoujie@gmail.com",
            "name": "Yus314",
            "username": "Yus314"
          },
          "committer": {
            "email": "shizhaoyoujie@gmail.com",
            "name": "Yus314",
            "username": "Yus314"
          },
          "distinct": true,
          "id": "ac908f082b6f8ee83527e52a39a1a82321d78685",
          "message": "diag(gui): oversize-glyph guard + identifying fields in atlas warn",
          "timestamp": "2026-05-10T14:02:22Z",
          "tree_id": "d61f1f175c86863c2c32b35c8132ebcec92ae2e4",
          "url": "https://github.com/dimasd-angga/kasane/commit/ac908f082b6f8ee83527e52a39a1a82321d78685"
        },
        "date": 1790877935416,
        "tool": "cargo",
        "benches": [
          {
            "name": "element_construct/plugins_0",
            "value": 5650,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "element_construct/plugins_10",
            "value": 10656,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "flex_layout",
            "value": 1022,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "paint/80x24",
            "value": 38664,
            "range": "± 1137",
            "unit": "ns/iter"
          },
          {
            "name": "paint/200x60",
            "value": 147288,
            "range": "± 3463",
            "unit": "ns/iter"
          },
          {
            "name": "paint/80x24_realistic",
            "value": 42848,
            "range": "± 1110",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff/full_redraw",
            "value": 27913,
            "range": "± 2495",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff/incremental",
            "value": 15083,
            "range": "± 307",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff_into/full_redraw",
            "value": 27203,
            "range": "± 2160",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff_into/incremental",
            "value": 14912,
            "range": "± 562",
            "unit": "ns/iter"
          },
          {
            "name": "grid_clear/80x24",
            "value": 5453,
            "range": "± 688",
            "unit": "ns/iter"
          },
          {
            "name": "grid_clear/200x60",
            "value": 26584,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "full_frame",
            "value": 64070,
            "range": "± 3209",
            "unit": "ns/iter"
          },
          {
            "name": "draw_message",
            "value": 70602,
            "range": "± 19306",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/10",
            "value": 64513,
            "range": "± 2156",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/50",
            "value": 64787,
            "range": "± 1500",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/100",
            "value": 64697,
            "range": "± 1820",
            "unit": "ns/iter"
          },
          {
            "name": "incremental_edit/lines/1",
            "value": 60947,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "incremental_edit/lines/5",
            "value": 63193,
            "range": "± 592",
            "unit": "ns/iter"
          },
          {
            "name": "message_sequence",
            "value": 69868,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/10",
            "value": 70130,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/100",
            "value": 615034,
            "range": "± 3158",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/500",
            "value": 2987864,
            "range": "± 24913",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_status",
            "value": 3402,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/menu_show_50",
            "value": 62498,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/23",
            "value": 33514,
            "range": "± 1870",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/100",
            "value": 132611,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/500",
            "value": 698013,
            "range": "± 1351",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_status",
            "value": 459,
            "range": "± 1116",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/menu_show_50",
            "value": 6004,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/80x24",
            "value": 64575,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/200x60",
            "value": 266164,
            "range": "± 2657",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/300x80",
            "value": 475096,
            "range": "± 5505",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/parse_apply_draw/500",
            "value": 3673927,
            "range": "± 9420",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/parse_apply_draw/1000",
            "value": 7321865,
            "range": "± 72711",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/80x24",
            "value": 14850,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/200x60",
            "value": 90975,
            "range": "± 1301",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/300x80",
            "value": 179529,
            "range": "± 3719",
            "unit": "ns/iter"
          },
          {
            "name": "cached_pipeline_dirty_flags/all_dirty",
            "value": 47532,
            "range": "± 785",
            "unit": "ns/iter"
          },
          {
            "name": "cached_pipeline_dirty_flags/menu_select_only",
            "value": 47060,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_cold",
            "value": 24094,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_warm",
            "value": 24118,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_menu_select",
            "value": 23999,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "section_paint_status_only",
            "value": 47157,
            "range": "± 509",
            "unit": "ns/iter"
          },
          {
            "name": "section_paint_menu_select",
            "value": 47176,
            "range": "± 446",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_single_edit",
            "value": 12659,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_all_changed",
            "value": 10334,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "apply_draw_line_comparison",
            "value": 33613,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_buffer_status/1_line_changed",
            "value": 14840,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/full_scan_23_lines",
            "value": 13435,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/incremental_2_dirty",
            "value": 13564,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/incremental_all_dirty",
            "value": 13557,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/23_lines",
            "value": 1888,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/59_lines",
            "value": 1894,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/79_lines",
            "value": 1887,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/realistic_23",
            "value": 1892,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_cursor_only",
            "value": 1889,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/status",
            "value": 1910,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/menu/100_items",
            "value": 5744,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/all_flags/80x24",
            "value": 1896,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/all_flags/300x80",
            "value": 1957,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/full_cold/salsa",
            "value": 53031,
            "range": "± 96754",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/full_cold/legacy",
            "value": 48407,
            "range": "± 549",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/menu_select_warm/salsa",
            "value": 50876,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/menu_select_warm/legacy",
            "value": 46817,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/incremental_edit/salsa",
            "value": 55751,
            "range": "± 41422",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/incremental_edit/legacy",
            "value": 50846,
            "range": "± 595",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scene/cold",
            "value": 23983,
            "range": "± 1325764",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scene/warm",
            "value": 5621,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/80x24",
            "value": 54377,
            "range": "± 482275",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/200x60",
            "value": 178101,
            "range": "± 403011",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/300x80",
            "value": 299455,
            "range": "± 207069",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw/80x24",
            "value": 54478,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw/200x60",
            "value": 300161,
            "range": "± 1856",
            "unit": "ns/iter"
          },
          {
            "name": "present/incremental_1line",
            "value": 21584,
            "range": "± 3716",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw_realistic/80x24",
            "value": 53124,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "e2e_pipeline/json_to_escape_80x24",
            "value": 208717,
            "range": "± 2044",
            "unit": "ns/iter"
          },
          {
            "name": "e2e_pipeline/json_to_escape_realistic",
            "value": 150654,
            "range": "± 3165",
            "unit": "ns/iter"
          },
          {
            "name": "replay/normal_editing_50msg",
            "value": 5307844,
            "range": "± 19712",
            "unit": "ns/iter"
          },
          {
            "name": "replay/fast_scroll_100msg",
            "value": 20135135,
            "range": "± 65155",
            "unit": "ns/iter"
          },
          {
            "name": "replay/menu_completion_20msg",
            "value": 1698311,
            "range": "± 8837",
            "unit": "ns/iter"
          },
          {
            "name": "replay/mixed_session_200msg",
            "value": 21754456,
            "range": "± 107988",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/bg_instances_80x24",
            "value": 4228,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/row_hash_24rows",
            "value": 49060,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/row_spans_80cols",
            "value": 468,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/color_resolve_1920cells",
            "value": 2270,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "cm_instantiation/component_new",
            "value": 21249350,
            "range": "± 190895",
            "unit": "ns/iter"
          },
          {
            "name": "cm_instantiation/component_instantiate",
            "value": 39259,
            "range": "± 3855",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/noop",
            "value": 523,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/add",
            "value": 510,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/echo_string_100",
            "value": 687,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/echo_string_10",
            "value": 685,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/build_gutter_24",
            "value": 5592,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/on_state_changed",
            "value": 964,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/contribute_lines_24",
            "value": 902,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/full_cycle",
            "value": 1929,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/10",
            "value": 46,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/100",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/1000",
            "value": 117,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/10",
            "value": 45,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/100",
            "value": 184,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/1000",
            "value": 1451,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/single_text",
            "value": 91,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/gutter_24",
            "value": 1530,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/nested_3x8",
            "value": 1658,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/nested_3x24",
            "value": 4751,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/decode_only_gutter_24",
            "value": 897,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/state_changed_3calls",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/state_changed_6calls",
            "value": 41,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/contribute_lines_24",
            "value": 71,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/full_cycle_state_lines",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/engine_new",
            "value": 1596,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/module_new_noop",
            "value": 304665,
            "range": "± 4390",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/instance_new_noop",
            "value": 779,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "empty_call/wasm_noop",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "empty_call/native_noop",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "integer_call/wasm_add",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "integer_call/native_add",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_import/1x",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_import/10x",
            "value": 72,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cursor_line_plugin/full_cycle",
            "value": 2001,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "cursor_line_plugin/cache_hit_no_call",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "line_numbers_gutter_24",
            "value": 5567,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/1",
            "value": 2016,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/3",
            "value": 5956,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/5",
            "value": 10037,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/10",
            "value": 19995,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/1",
            "value": 34364,
            "range": "± 3758",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/5",
            "value": 157940,
            "range": "± 14074",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/10",
            "value": 301743,
            "range": "± 17595",
            "unit": "ns/iter"
          },
          {
            "name": "native_baseline/native_cursor_line_full",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "native_baseline/native_gutter_24",
            "value": 1406,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shizhaoyoujie@gmail.com",
            "name": "Yus314",
            "username": "Yus314"
          },
          "committer": {
            "email": "shizhaoyoujie@gmail.com",
            "name": "Yus314",
            "username": "Yus314"
          },
          "distinct": true,
          "id": "35f7732fa612790f1e3236be211e4ee257f3b021",
          "message": "diag(gui): oversize-glyph guard + identifying fields in atlas warn",
          "timestamp": "2026-05-10T07:02:23-07:00",
          "tree_id": "f1279b0b455be870b69694995e7b20132f37676e",
          "url": "https://github.com/dimasd-angga/kasane/commit/35f7732fa612790f1e3236be211e4ee257f3b021"
        },
        "date": 1792660699300,
        "tool": "cargo",
        "benches": [
          {
            "name": "element_construct/plugins_0",
            "value": 5723,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "element_construct/plugins_10",
            "value": 10451,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "flex_layout",
            "value": 1012,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "paint/80x24",
            "value": 38608,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "paint/200x60",
            "value": 146799,
            "range": "± 2025",
            "unit": "ns/iter"
          },
          {
            "name": "paint/80x24_realistic",
            "value": 42853,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff/full_redraw",
            "value": 27805,
            "range": "± 2490",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff/incremental",
            "value": 15069,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff_into/full_redraw",
            "value": 27165,
            "range": "± 2092",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff_into/incremental",
            "value": 15077,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "grid_clear/80x24",
            "value": 4227,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "grid_clear/200x60",
            "value": 26493,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "full_frame",
            "value": 64377,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "draw_message",
            "value": 71221,
            "range": "± 1044",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/10",
            "value": 64557,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/50",
            "value": 64579,
            "range": "± 1022",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/100",
            "value": 64639,
            "range": "± 1873",
            "unit": "ns/iter"
          },
          {
            "name": "incremental_edit/lines/1",
            "value": 61323,
            "range": "± 476",
            "unit": "ns/iter"
          },
          {
            "name": "incremental_edit/lines/5",
            "value": 63079,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "message_sequence",
            "value": 69976,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/10",
            "value": 70317,
            "range": "± 3526",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/100",
            "value": 613474,
            "range": "± 29994",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/500",
            "value": 2983887,
            "range": "± 7696",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_status",
            "value": 3426,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/menu_show_50",
            "value": 62131,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/23",
            "value": 33484,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/100",
            "value": 132537,
            "range": "± 599",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/500",
            "value": 697343,
            "range": "± 3505",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_status",
            "value": 480,
            "range": "± 767",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/menu_show_50",
            "value": 5891,
            "range": "± 1899",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/80x24",
            "value": 64431,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/200x60",
            "value": 266967,
            "range": "± 3048",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/300x80",
            "value": 476416,
            "range": "± 5414",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/parse_apply_draw/500",
            "value": 3675046,
            "range": "± 6606",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/parse_apply_draw/1000",
            "value": 7322768,
            "range": "± 17035",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/80x24",
            "value": 15271,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/200x60",
            "value": 90092,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/300x80",
            "value": 185471,
            "range": "± 622",
            "unit": "ns/iter"
          },
          {
            "name": "cached_pipeline_dirty_flags/all_dirty",
            "value": 47684,
            "range": "± 642",
            "unit": "ns/iter"
          },
          {
            "name": "cached_pipeline_dirty_flags/menu_select_only",
            "value": 47348,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_cold",
            "value": 23891,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_warm",
            "value": 24014,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_menu_select",
            "value": 24110,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "section_paint_status_only",
            "value": 47351,
            "range": "± 4157",
            "unit": "ns/iter"
          },
          {
            "name": "section_paint_menu_select",
            "value": 47323,
            "range": "± 458",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_single_edit",
            "value": 12843,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_all_changed",
            "value": 10452,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "apply_draw_line_comparison",
            "value": 33652,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_buffer_status/1_line_changed",
            "value": 14930,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/full_scan_23_lines",
            "value": 13523,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/incremental_2_dirty",
            "value": 13519,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/incremental_all_dirty",
            "value": 13526,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/23_lines",
            "value": 2063,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/59_lines",
            "value": 1899,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/79_lines",
            "value": 1896,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/realistic_23",
            "value": 1893,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_cursor_only",
            "value": 1916,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/status",
            "value": 1892,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/menu/100_items",
            "value": 5833,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/all_flags/80x24",
            "value": 1898,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/all_flags/300x80",
            "value": 1904,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/full_cold/salsa",
            "value": 53956,
            "range": "± 923",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/full_cold/legacy",
            "value": 48609,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/menu_select_warm/salsa",
            "value": 50636,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/menu_select_warm/legacy",
            "value": 47078,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/incremental_edit/salsa",
            "value": 56289,
            "range": "± 2496",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/incremental_edit/legacy",
            "value": 51168,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scene/cold",
            "value": 25832,
            "range": "± 104878",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scene/warm",
            "value": 5738,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/80x24",
            "value": 55675,
            "range": "± 2056",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/200x60",
            "value": 178244,
            "range": "± 6958",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/300x80",
            "value": 304418,
            "range": "± 11217",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw/80x24",
            "value": 54023,
            "range": "± 619",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw/200x60",
            "value": 301288,
            "range": "± 2038",
            "unit": "ns/iter"
          },
          {
            "name": "present/incremental_1line",
            "value": 21602,
            "range": "± 3446",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw_realistic/80x24",
            "value": 53301,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "e2e_pipeline/json_to_escape_80x24",
            "value": 209571,
            "range": "± 2150",
            "unit": "ns/iter"
          },
          {
            "name": "e2e_pipeline/json_to_escape_realistic",
            "value": 151619,
            "range": "± 1538",
            "unit": "ns/iter"
          },
          {
            "name": "replay/normal_editing_50msg",
            "value": 5316343,
            "range": "± 32862",
            "unit": "ns/iter"
          },
          {
            "name": "replay/fast_scroll_100msg",
            "value": 20181535,
            "range": "± 36658",
            "unit": "ns/iter"
          },
          {
            "name": "replay/menu_completion_20msg",
            "value": 1695233,
            "range": "± 14940",
            "unit": "ns/iter"
          },
          {
            "name": "replay/mixed_session_200msg",
            "value": 21743279,
            "range": "± 437266",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/bg_instances_80x24",
            "value": 4249,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/row_hash_24rows",
            "value": 49146,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/row_spans_80cols",
            "value": 469,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/color_resolve_1920cells",
            "value": 2275,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "cm_instantiation/component_new",
            "value": 22084908,
            "range": "± 298378",
            "unit": "ns/iter"
          },
          {
            "name": "cm_instantiation/component_instantiate",
            "value": 33822,
            "range": "± 2665",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/noop",
            "value": 498,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/add",
            "value": 511,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/echo_string_100",
            "value": 690,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/echo_string_10",
            "value": 670,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/build_gutter_24",
            "value": 5741,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/on_state_changed",
            "value": 967,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/contribute_lines_24",
            "value": 902,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/full_cycle",
            "value": 1886,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/10",
            "value": 46,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/100",
            "value": 61,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/1000",
            "value": 120,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/10",
            "value": 45,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/100",
            "value": 183,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/1000",
            "value": 1479,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/single_text",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/gutter_24",
            "value": 1574,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/nested_3x8",
            "value": 1701,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/nested_3x24",
            "value": 4742,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/decode_only_gutter_24",
            "value": 938,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/state_changed_3calls",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/state_changed_6calls",
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/contribute_lines_24",
            "value": 71,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/full_cycle_state_lines",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/engine_new",
            "value": 1580,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/module_new_noop",
            "value": 308099,
            "range": "± 4880",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/instance_new_noop",
            "value": 818,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "empty_call/wasm_noop",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "empty_call/native_noop",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "integer_call/wasm_add",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "integer_call/native_add",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_import/1x",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_import/10x",
            "value": 71,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cursor_line_plugin/full_cycle",
            "value": 1965,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "cursor_line_plugin/cache_hit_no_call",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "line_numbers_gutter_24",
            "value": 5596,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/1",
            "value": 1964,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/3",
            "value": 5926,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/5",
            "value": 9919,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/10",
            "value": 19713,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/1",
            "value": 33793,
            "range": "± 3251",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/5",
            "value": 154863,
            "range": "± 11645",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/10",
            "value": 315630,
            "range": "± 23987",
            "unit": "ns/iter"
          },
          {
            "name": "native_baseline/native_cursor_line_full",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "native_baseline/native_gutter_24",
            "value": 1462,
            "range": "± 17",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shizhaoyoujie@gmail.com",
            "name": "Yus314",
            "username": "Yus314"
          },
          "committer": {
            "email": "shizhaoyoujie@gmail.com",
            "name": "Yus314",
            "username": "Yus314"
          },
          "distinct": true,
          "id": "340fa94bf7859df7ffe6bac7a9197ca879fe41b6",
          "message": "diag(gui): oversize-glyph guard + identifying fields in atlas warn",
          "timestamp": "2026-05-10T15:02:24+01:00",
          "tree_id": "35afae9cdd2d5d640c5317123643a1192d279841",
          "url": "https://github.com/dimasd-angga/kasane/commit/340fa94bf7859df7ffe6bac7a9197ca879fe41b6"
        },
        "date": 1794482458040,
        "tool": "cargo",
        "benches": [
          {
            "name": "element_construct/plugins_0",
            "value": 3582,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "element_construct/plugins_10",
            "value": 6917,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "flex_layout",
            "value": 538,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "paint/80x24",
            "value": 22689,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "paint/200x60",
            "value": 85817,
            "range": "± 1016",
            "unit": "ns/iter"
          },
          {
            "name": "paint/80x24_realistic",
            "value": 25271,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff/full_redraw",
            "value": 18192,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff/incremental",
            "value": 7335,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff_into/full_redraw",
            "value": 17594,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff_into/incremental",
            "value": 7521,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "grid_clear/80x24",
            "value": 2086,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "grid_clear/200x60",
            "value": 12962,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "full_frame",
            "value": 35665,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "draw_message",
            "value": 41223,
            "range": "± 1762",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/10",
            "value": 36211,
            "range": "± 643",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/50",
            "value": 36225,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/100",
            "value": 36170,
            "range": "± 1593",
            "unit": "ns/iter"
          },
          {
            "name": "incremental_edit/lines/1",
            "value": 34176,
            "range": "± 1491",
            "unit": "ns/iter"
          },
          {
            "name": "incremental_edit/lines/5",
            "value": 35065,
            "range": "± 1107",
            "unit": "ns/iter"
          },
          {
            "name": "message_sequence",
            "value": 40087,
            "range": "± 2346",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/10",
            "value": 48242,
            "range": "± 2376",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/100",
            "value": 430202,
            "range": "± 11584",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/500",
            "value": 2152593,
            "range": "± 82692",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_status",
            "value": 2352,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/menu_show_50",
            "value": 43820,
            "range": "± 2989",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/23",
            "value": 20968,
            "range": "± 1315",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/100",
            "value": 82617,
            "range": "± 5517",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/500",
            "value": 428338,
            "range": "± 12252",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_status",
            "value": 425,
            "range": "± 1562",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/menu_show_50",
            "value": 3341,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/80x24",
            "value": 35441,
            "range": "± 850",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/200x60",
            "value": 140932,
            "range": "± 2842",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/300x80",
            "value": 253455,
            "range": "± 6299",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/parse_apply_draw/500",
            "value": 2585574,
            "range": "± 107466",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/parse_apply_draw/1000",
            "value": 5161785,
            "range": "± 132991",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/80x24",
            "value": 7203,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/200x60",
            "value": 43890,
            "range": "± 874",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/300x80",
            "value": 89201,
            "range": "± 3319",
            "unit": "ns/iter"
          },
          {
            "name": "cached_pipeline_dirty_flags/all_dirty",
            "value": 27238,
            "range": "± 1270",
            "unit": "ns/iter"
          },
          {
            "name": "cached_pipeline_dirty_flags/menu_select_only",
            "value": 27324,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_cold",
            "value": 14018,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_warm",
            "value": 14347,
            "range": "± 713",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_menu_select",
            "value": 14210,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "section_paint_status_only",
            "value": 26710,
            "range": "± 756",
            "unit": "ns/iter"
          },
          {
            "name": "section_paint_menu_select",
            "value": 26332,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_single_edit",
            "value": 7425,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_all_changed",
            "value": 6113,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "apply_draw_line_comparison",
            "value": 20759,
            "range": "± 775",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_buffer_status/1_line_changed",
            "value": 8420,
            "range": "± 2117",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/full_scan_23_lines",
            "value": 8304,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/incremental_2_dirty",
            "value": 8231,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/incremental_all_dirty",
            "value": 8262,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/23_lines",
            "value": 1319,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/59_lines",
            "value": 1299,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/79_lines",
            "value": 1305,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/realistic_23",
            "value": 1292,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_cursor_only",
            "value": 1312,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/status",
            "value": 1293,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/menu/100_items",
            "value": 4929,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/all_flags/80x24",
            "value": 1297,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/all_flags/300x80",
            "value": 1323,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/full_cold/salsa",
            "value": 32720,
            "range": "± 473960",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/full_cold/legacy",
            "value": 28600,
            "range": "± 2240",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/menu_select_warm/salsa",
            "value": 29686,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/menu_select_warm/legacy",
            "value": 27402,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/incremental_edit/salsa",
            "value": 36043,
            "range": "± 4491",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/incremental_edit/legacy",
            "value": 30205,
            "range": "± 2709",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scene/cold",
            "value": 16178,
            "range": "± 47104",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scene/warm",
            "value": 3453,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/80x24",
            "value": 39742,
            "range": "± 60363",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/200x60",
            "value": 109607,
            "range": "± 8327",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/300x80",
            "value": 179892,
            "range": "± 8577",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw/80x24",
            "value": 26661,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw/200x60",
            "value": 144374,
            "range": "± 2869",
            "unit": "ns/iter"
          },
          {
            "name": "present/incremental_1line",
            "value": 10783,
            "range": "± 7001",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw_realistic/80x24",
            "value": 26113,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "e2e_pipeline/json_to_escape_80x24",
            "value": 135936,
            "range": "± 3103",
            "unit": "ns/iter"
          },
          {
            "name": "e2e_pipeline/json_to_escape_realistic",
            "value": 98801,
            "range": "± 5696",
            "unit": "ns/iter"
          },
          {
            "name": "replay/normal_editing_50msg",
            "value": 3036227,
            "range": "± 46648",
            "unit": "ns/iter"
          },
          {
            "name": "replay/fast_scroll_100msg",
            "value": 13718381,
            "range": "± 450238",
            "unit": "ns/iter"
          },
          {
            "name": "replay/menu_completion_20msg",
            "value": 1116311,
            "range": "± 25905",
            "unit": "ns/iter"
          },
          {
            "name": "replay/mixed_session_200msg",
            "value": 14330681,
            "range": "± 236718",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/bg_instances_80x24",
            "value": 2310,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/row_hash_24rows",
            "value": 28454,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/row_spans_80cols",
            "value": 240,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/color_resolve_1920cells",
            "value": 1319,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "cm_instantiation/component_new",
            "value": 13383131,
            "range": "± 390720",
            "unit": "ns/iter"
          },
          {
            "name": "cm_instantiation/component_instantiate",
            "value": 23483,
            "range": "± 2044",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/noop",
            "value": 268,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/add",
            "value": 263,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/echo_string_100",
            "value": 359,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/echo_string_10",
            "value": 339,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/build_gutter_24",
            "value": 3208,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/on_state_changed",
            "value": 474,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/contribute_lines_24",
            "value": 497,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/full_cycle",
            "value": 987,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/10",
            "value": 19,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/100",
            "value": 24,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/1000",
            "value": 55,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/10",
            "value": 24,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/100",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/1000",
            "value": 713,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/single_text",
            "value": 44,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/gutter_24",
            "value": 1029,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/nested_3x8",
            "value": 1053,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/nested_3x24",
            "value": 2917,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/decode_only_gutter_24",
            "value": 689,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/state_changed_3calls",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/state_changed_6calls",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/contribute_lines_24",
            "value": 31,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/full_cycle_state_lines",
            "value": 49,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/engine_new",
            "value": 1010,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/module_new_noop",
            "value": 176012,
            "range": "± 11596",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/instance_new_noop",
            "value": 457,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "empty_call/wasm_noop",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "empty_call/native_noop",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "integer_call/wasm_add",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "integer_call/native_add",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_import/1x",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_import/10x",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cursor_line_plugin/full_cycle",
            "value": 1057,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "cursor_line_plugin/cache_hit_no_call",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "line_numbers_gutter_24",
            "value": 3011,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/1",
            "value": 970,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/3",
            "value": 3154,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/5",
            "value": 5122,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/10",
            "value": 10439,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/1",
            "value": 20826,
            "range": "± 2538",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/5",
            "value": 110499,
            "range": "± 9146",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/10",
            "value": 223395,
            "range": "± 23831",
            "unit": "ns/iter"
          },
          {
            "name": "native_baseline/native_cursor_line_full",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "native_baseline/native_gutter_24",
            "value": 882,
            "range": "± 63",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shizhaoyoujie@gmail.com",
            "name": "Yus314",
            "username": "Yus314"
          },
          "committer": {
            "email": "shizhaoyoujie@gmail.com",
            "name": "Yus314",
            "username": "Yus314"
          },
          "distinct": true,
          "id": "40f66a1cc347b3c9545d9f24ba481476167a7744",
          "message": "diag(gui): oversize-glyph guard + identifying fields in atlas warn",
          "timestamp": "2026-05-10T15:02:24+01:00",
          "tree_id": "5d4f25e60ccaeb07a48afa94d3d0b900fc090989",
          "url": "https://github.com/dimasd-angga/kasane/commit/40f66a1cc347b3c9545d9f24ba481476167a7744"
        },
        "date": 1794488469058,
        "tool": "cargo",
        "benches": [
          {
            "name": "element_construct/plugins_0",
            "value": 5283,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "element_construct/plugins_10",
            "value": 10587,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "flex_layout",
            "value": 958,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "paint/80x24",
            "value": 33223,
            "range": "± 719",
            "unit": "ns/iter"
          },
          {
            "name": "paint/200x60",
            "value": 128984,
            "range": "± 1360",
            "unit": "ns/iter"
          },
          {
            "name": "paint/80x24_realistic",
            "value": 36741,
            "range": "± 742",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff/full_redraw",
            "value": 33630,
            "range": "± 1565",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff/incremental",
            "value": 13206,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff_into/full_redraw",
            "value": 31299,
            "range": "± 588",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff_into/incremental",
            "value": 13255,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "grid_clear/80x24",
            "value": 3882,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "grid_clear/200x60",
            "value": 24220,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "full_frame",
            "value": 57965,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "draw_message",
            "value": 65666,
            "range": "± 1088",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/10",
            "value": 58025,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/50",
            "value": 58166,
            "range": "± 518",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/100",
            "value": 58131,
            "range": "± 688",
            "unit": "ns/iter"
          },
          {
            "name": "incremental_edit/lines/1",
            "value": 54722,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "incremental_edit/lines/5",
            "value": 56885,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "message_sequence",
            "value": 65687,
            "range": "± 917",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/10",
            "value": 78685,
            "range": "± 1137",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/100",
            "value": 717274,
            "range": "± 11247",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/500",
            "value": 3635865,
            "range": "± 52568",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_status",
            "value": 3725,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/menu_show_50",
            "value": 70320,
            "range": "± 586",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/23",
            "value": 31071,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/100",
            "value": 123218,
            "range": "± 1608",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/500",
            "value": 646617,
            "range": "± 4001",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_status",
            "value": 620,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/menu_show_50",
            "value": 8415,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/80x24",
            "value": 58054,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/200x60",
            "value": 241107,
            "range": "± 1473",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/300x80",
            "value": 446439,
            "range": "± 1695",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/parse_apply_draw/500",
            "value": 4311539,
            "range": "± 40563",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/parse_apply_draw/1000",
            "value": 8813903,
            "range": "± 43225",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/80x24",
            "value": 13190,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/200x60",
            "value": 79715,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/300x80",
            "value": 159909,
            "range": "± 982",
            "unit": "ns/iter"
          },
          {
            "name": "cached_pipeline_dirty_flags/all_dirty",
            "value": 42252,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "cached_pipeline_dirty_flags/menu_select_only",
            "value": 42797,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_cold",
            "value": 24624,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_warm",
            "value": 24593,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_menu_select",
            "value": 24779,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "section_paint_status_only",
            "value": 42176,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "section_paint_menu_select",
            "value": 42255,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_single_edit",
            "value": 12107,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_all_changed",
            "value": 9872,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "apply_draw_line_comparison",
            "value": 30984,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_buffer_status/1_line_changed",
            "value": 17123,
            "range": "± 1572",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/full_scan_23_lines",
            "value": 11840,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/incremental_2_dirty",
            "value": 11939,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/incremental_all_dirty",
            "value": 11967,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/23_lines",
            "value": 2016,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/59_lines",
            "value": 2003,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/79_lines",
            "value": 2016,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/realistic_23",
            "value": 2011,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_cursor_only",
            "value": 2037,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/status",
            "value": 2025,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/menu/100_items",
            "value": 7899,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/all_flags/80x24",
            "value": 2008,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/all_flags/300x80",
            "value": 2020,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/full_cold/salsa",
            "value": 58099,
            "range": "± 414374",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/full_cold/legacy",
            "value": 45108,
            "range": "± 1803",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/menu_select_warm/salsa",
            "value": 45065,
            "range": "± 510",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/menu_select_warm/legacy",
            "value": 42145,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/incremental_edit/salsa",
            "value": 61193,
            "range": "± 5825",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/incremental_edit/legacy",
            "value": 48658,
            "range": "± 2269",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scene/cold",
            "value": 30830,
            "range": "± 195364",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scene/warm",
            "value": 6003,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/80x24",
            "value": 62126,
            "range": "± 282157",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/200x60",
            "value": 196002,
            "range": "± 783517",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/300x80",
            "value": 322964,
            "range": "± 429351",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw/80x24",
            "value": 48768,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw/200x60",
            "value": 263029,
            "range": "± 3381",
            "unit": "ns/iter"
          },
          {
            "name": "present/incremental_1line",
            "value": 21365,
            "range": "± 2969",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw_realistic/80x24",
            "value": 47320,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "e2e_pipeline/json_to_escape_80x24",
            "value": 219224,
            "range": "± 1961",
            "unit": "ns/iter"
          },
          {
            "name": "e2e_pipeline/json_to_escape_realistic",
            "value": 159528,
            "range": "± 1338",
            "unit": "ns/iter"
          },
          {
            "name": "replay/normal_editing_50msg",
            "value": 5075958,
            "range": "± 15362",
            "unit": "ns/iter"
          },
          {
            "name": "replay/fast_scroll_100msg",
            "value": 21869323,
            "range": "± 31887",
            "unit": "ns/iter"
          },
          {
            "name": "replay/menu_completion_20msg",
            "value": 1836824,
            "range": "± 94144",
            "unit": "ns/iter"
          },
          {
            "name": "replay/mixed_session_200msg",
            "value": 23355708,
            "range": "± 67293",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/bg_instances_80x24",
            "value": 4894,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/row_hash_24rows",
            "value": 51540,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/row_spans_80cols",
            "value": 399,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/color_resolve_1920cells",
            "value": 2508,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "cm_instantiation/component_new",
            "value": 22265345,
            "range": "± 1653368",
            "unit": "ns/iter"
          },
          {
            "name": "cm_instantiation/component_instantiate",
            "value": 25443,
            "range": "± 3953",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/noop",
            "value": 381,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/add",
            "value": 394,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/echo_string_100",
            "value": 513,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/echo_string_10",
            "value": 513,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/build_gutter_24",
            "value": 5091,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/on_state_changed",
            "value": 683,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/contribute_lines_24",
            "value": 713,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/full_cycle",
            "value": 1424,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/10",
            "value": 28,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/100",
            "value": 45,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/1000",
            "value": 79,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/10",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/100",
            "value": 144,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/1000",
            "value": 1119,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/single_text",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/gutter_24",
            "value": 1477,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/nested_3x8",
            "value": 1629,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/nested_3x24",
            "value": 4594,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/decode_only_gutter_24",
            "value": 1124,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/state_changed_3calls",
            "value": 27,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/state_changed_6calls",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/contribute_lines_24",
            "value": 60,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/full_cycle_state_lines",
            "value": 91,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/engine_new",
            "value": 1518,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/module_new_noop",
            "value": 276764,
            "range": "± 16876",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/instance_new_noop",
            "value": 684,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "empty_call/wasm_noop",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "empty_call/native_noop",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "integer_call/wasm_add",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "integer_call/native_add",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "host_import/1x",
            "value": 18,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "host_import/10x",
            "value": 56,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cursor_line_plugin/full_cycle",
            "value": 1433,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "cursor_line_plugin/cache_hit_no_call",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "line_numbers_gutter_24",
            "value": 4940,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/1",
            "value": 1401,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/3",
            "value": 4233,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/5",
            "value": 6992,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/10",
            "value": 13975,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/1",
            "value": 25013,
            "range": "± 3785",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/5",
            "value": 114765,
            "range": "± 13256",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/10",
            "value": 235460,
            "range": "± 27702",
            "unit": "ns/iter"
          },
          {
            "name": "native_baseline/native_cursor_line_full",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "native_baseline/native_gutter_24",
            "value": 1411,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}