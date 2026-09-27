window.BENCHMARK_DATA = {
  "lastUpdate": 1790477936736,
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
      }
    ]
  }
}