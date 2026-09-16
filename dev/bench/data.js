window.BENCHMARK_DATA = {
  "lastUpdate": 1789518560456,
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
          "id": "b23ac8ab262afff41fd2e44309605b45786f1b36",
          "message": "diag(gui): oversize-glyph guard + identifying fields in atlas warn",
          "timestamp": "2026-05-10T07:02:22-07:00",
          "tree_id": "a575850a1d721a6ff72267414c8ccb498aea95ac",
          "url": "https://github.com/dimasd-angga/kasane/commit/b23ac8ab262afff41fd2e44309605b45786f1b36"
        },
        "date": 1789518559991,
        "tool": "cargo",
        "benches": [
          {
            "name": "element_construct/plugins_0",
            "value": 5681,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "element_construct/plugins_10",
            "value": 10571,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "flex_layout",
            "value": 1005,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "paint/80x24",
            "value": 38647,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "paint/200x60",
            "value": 147265,
            "range": "± 5587",
            "unit": "ns/iter"
          },
          {
            "name": "paint/80x24_realistic",
            "value": 42883,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff/full_redraw",
            "value": 27669,
            "range": "± 2517",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff/incremental",
            "value": 15057,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff_into/full_redraw",
            "value": 27124,
            "range": "± 4639",
            "unit": "ns/iter"
          },
          {
            "name": "grid_diff_into/incremental",
            "value": 15015,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "grid_clear/80x24",
            "value": 4223,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "grid_clear/200x60",
            "value": 26542,
            "range": "± 648",
            "unit": "ns/iter"
          },
          {
            "name": "full_frame",
            "value": 64054,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "draw_message",
            "value": 69976,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/10",
            "value": 64333,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/50",
            "value": 64382,
            "range": "± 1228",
            "unit": "ns/iter"
          },
          {
            "name": "menu_show/items/100",
            "value": 64418,
            "range": "± 2867",
            "unit": "ns/iter"
          },
          {
            "name": "incremental_edit/lines/1",
            "value": 61800,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "incremental_edit/lines/5",
            "value": 63767,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "message_sequence",
            "value": 69328,
            "range": "± 1916",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/10",
            "value": 69971,
            "range": "± 723",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/100",
            "value": 615388,
            "range": "± 30232",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_lines/500",
            "value": 2977627,
            "range": "± 14321",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/draw_status",
            "value": 3472,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "parse_request/menu_show_50",
            "value": 62489,
            "range": "± 4413",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/23",
            "value": 33508,
            "range": "± 654",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/100",
            "value": 132847,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_lines/500",
            "value": 699465,
            "range": "± 1727",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/draw_status",
            "value": 655,
            "range": "± 837",
            "unit": "ns/iter"
          },
          {
            "name": "state_apply/menu_show_50",
            "value": 5968,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/80x24",
            "value": 65298,
            "range": "± 757",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/200x60",
            "value": 266937,
            "range": "± 3210",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/full_frame/300x80",
            "value": 476750,
            "range": "± 6600",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/parse_apply_draw/500",
            "value": 3669654,
            "range": "± 28542",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/parse_apply_draw/1000",
            "value": 7329476,
            "range": "± 53237",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/80x24",
            "value": 15542,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/200x60",
            "value": 90682,
            "range": "± 2079",
            "unit": "ns/iter"
          },
          {
            "name": "scaling/diff_incremental/300x80",
            "value": 186764,
            "range": "± 1285",
            "unit": "ns/iter"
          },
          {
            "name": "cached_pipeline_dirty_flags/all_dirty",
            "value": 47805,
            "range": "± 948",
            "unit": "ns/iter"
          },
          {
            "name": "cached_pipeline_dirty_flags/menu_select_only",
            "value": 47450,
            "range": "± 535",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_cold",
            "value": 23799,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_warm",
            "value": 23877,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "scene_cache_menu_select",
            "value": 24130,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "section_paint_status_only",
            "value": 47205,
            "range": "± 588",
            "unit": "ns/iter"
          },
          {
            "name": "section_paint_menu_select",
            "value": 47087,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_single_edit",
            "value": 12780,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_all_changed",
            "value": 10517,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "apply_draw_line_comparison",
            "value": 33584,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "line_dirty_buffer_status/1_line_changed",
            "value": 14990,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/full_scan_23_lines",
            "value": 13460,
            "range": "± 560",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/incremental_2_dirty",
            "value": 13620,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "detect_cursors/incremental_all_dirty",
            "value": 13524,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/23_lines",
            "value": 1906,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/59_lines",
            "value": 1894,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/79_lines",
            "value": 1912,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_content/realistic_23",
            "value": 1893,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/buffer_cursor_only",
            "value": 1905,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/status",
            "value": 1907,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/menu/100_items",
            "value": 5820,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/all_flags/80x24",
            "value": 1895,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_sync_inputs/all_flags/300x80",
            "value": 1899,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/full_cold/salsa",
            "value": 53519,
            "range": "± 512525",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/full_cold/legacy",
            "value": 48721,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/menu_select_warm/salsa",
            "value": 50546,
            "range": "± 3702",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/menu_select_warm/legacy",
            "value": 47269,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/incremental_edit/salsa",
            "value": 56434,
            "range": "± 2510",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_vs_legacy/incremental_edit/legacy",
            "value": 51328,
            "range": "± 1052",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scene/cold",
            "value": 24472,
            "range": "± 193399",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scene/warm",
            "value": 5715,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/80x24",
            "value": 55167,
            "range": "± 1766",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/200x60",
            "value": 180057,
            "range": "± 463017",
            "unit": "ns/iter"
          },
          {
            "name": "salsa_scaling/full_frame/300x80",
            "value": 300760,
            "range": "± 39856",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw/80x24",
            "value": 54606,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw/200x60",
            "value": 301603,
            "range": "± 5447",
            "unit": "ns/iter"
          },
          {
            "name": "present/incremental_1line",
            "value": 21645,
            "range": "± 3660",
            "unit": "ns/iter"
          },
          {
            "name": "present/full_redraw_realistic/80x24",
            "value": 53267,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "e2e_pipeline/json_to_escape_80x24",
            "value": 207211,
            "range": "± 5921",
            "unit": "ns/iter"
          },
          {
            "name": "e2e_pipeline/json_to_escape_realistic",
            "value": 151127,
            "range": "± 4616",
            "unit": "ns/iter"
          },
          {
            "name": "replay/normal_editing_50msg",
            "value": 5336574,
            "range": "± 9906",
            "unit": "ns/iter"
          },
          {
            "name": "replay/fast_scroll_100msg",
            "value": 20279134,
            "range": "± 175354",
            "unit": "ns/iter"
          },
          {
            "name": "replay/menu_completion_20msg",
            "value": 1699672,
            "range": "± 14421",
            "unit": "ns/iter"
          },
          {
            "name": "replay/mixed_session_200msg",
            "value": 21767793,
            "range": "± 85972",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/bg_instances_80x24",
            "value": 4293,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/row_hash_24rows",
            "value": 49105,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/row_spans_80cols",
            "value": 469,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "gpu/color_resolve_1920cells",
            "value": 2272,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "cm_instantiation/component_new",
            "value": 21824072,
            "range": "± 297812",
            "unit": "ns/iter"
          },
          {
            "name": "cm_instantiation/component_instantiate",
            "value": 39370,
            "range": "± 3029",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/noop",
            "value": 547,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/add",
            "value": 544,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/echo_string_100",
            "value": 723,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/echo_string_10",
            "value": 699,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/build_gutter_24",
            "value": 5589,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/on_state_changed",
            "value": 991,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/contribute_lines_24",
            "value": 919,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cm_calls/full_cycle",
            "value": 1933,
            "range": "± 15",
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
            "value": 60,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/write_echo/1000",
            "value": 120,
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
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "string_passing/guest_build_read/1000",
            "value": 1449,
            "range": "± 1",
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
            "value": 1587,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/nested_3x8",
            "value": 1699,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/nested_3x24",
            "value": 4799,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "element_construction/decode_only_gutter_24",
            "value": 959,
            "range": "± 21",
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
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "host_fn_density/full_cycle_state_lines",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/engine_new",
            "value": 1570,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/module_new_noop",
            "value": 306353,
            "range": "± 4188",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation/instance_new_noop",
            "value": 806,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "empty_call/wasm_noop",
            "value": 18,
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cursor_line_plugin/full_cycle",
            "value": 2032,
            "range": "± 34",
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
            "value": 5653,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/1",
            "value": 2028,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/3",
            "value": 6093,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/5",
            "value": 10124,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "multi_plugin/full_frame/10",
            "value": 20422,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/1",
            "value": 33032,
            "range": "± 2789",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/5",
            "value": 150583,
            "range": "± 12606",
            "unit": "ns/iter"
          },
          {
            "name": "instantiation_scaling/instantiate_n/10",
            "value": 304739,
            "range": "± 25429",
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
            "value": 1442,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}