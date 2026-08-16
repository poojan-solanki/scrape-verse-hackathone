# Deliver snapshot

> **Official Source**: [https://docs.brightdata.com/api-reference/marketplace-dataset-api/deliver-snapshot](https://docs.brightdata.com/api-reference/marketplace-dataset-api/deliver-snapshot)
> **Category**: `datasets-and-scrapers`

---

api-reference/dca-api POST /datasets/snapshots/{id}/deliver
Use the Bright Data Marketplace Dataset API to deliver a Snapshot. POST /datasets/snapshots/{id}/deliver returns 200 OK with metadata as JSON.

<AccordionGroup>
  <Accordion title="Before you begin" icon="circle-info">
    You need a **Snapshot ID** to use this endpoint. A Snapshot ID (e.g., `snap_m2bxug4e2o352v1jv1`) is a unique identifier created each time a data collection is triggered or a dataset is filtered.

    ### Where do Snapshot IDs come from?

    | Source                                                                                      | Endpoint                       | What it returns                              |
    | :------------------------------------------------------------------------------------------ | :----------------------------- | :------------------------------------------- |
    | [Filter Dataset](/api-reference/marketplace-dataset-api/filter-dataset-with-csv-json-files) | `POST` `/datasets/filter`      | `snapshot_id` in the response body           |
    | [Trigger Collection](/api-reference/rest-api/scraper/asynchronous-requests)                 | `POST` `/datasets/v3/trigger`  | `snapshot_id` in the response body           |
    | Dataset Subscription                                                                        | Automatic delivery schedule    | Snapshot IDs are generated per scheduled run |
    | [Snapshot List](/api-reference/scrapers/management-apis/get-snapshots)                      | `GET` `/datasets/v3/snapshots` | List of all snapshots with their IDs         |

    <Tip>
      If you don't have a Snapshot ID yet, start by filtering a dataset [Filter Dataset](/api-reference/marketplace-dataset-api/filter-dataset) or [triggering a collection](/api-reference/rest-api/scraper/asynchronous-requests) first. The response will include the `snapshot_id` you need.
    </Tip>

    You can check snapshot status before delivering:

    ```sh theme={null}
    curl "https://api.brightdata.com/datasets/snapshots/snap_m2bxug4e2o352v1jv1" \
      -H "Authorization: Bearer YOUR_API_KEY"
    ```

    The snapshot must be in `ready` status before delivery.

    > See [Get Snapshot Metadata](/api-reference/marketplace-dataset-api/get-snapshot-meta) for full documentation.
  </Accordion>

  <Accordion title="Tracking delivery status" icon="clock">
    The `id` returned in the response is a **delivery job ID**. Use it to monitor whether your delivery has completed, failed, or been canceled.

    <CodeGroup>
      ```sh Endpoint theme={null}
      GET https://api.brightdata.com/datasets/v3/delivery/{delivery_id}
      ```

      ```sh Example theme={null}
      curl "https://api.brightdata.com/datasets/v3/delivery/del_abc123xyz" \
        -H "Authorization: Bearer YOUR_API_KEY"
      ```

      ```json Response theme={null}
      {
        "id": "del_abc123xyz",
        "status": "done",
        "delivery_files": [
          {
            "filename": "my-data.json",
            "delivery_ts": 1709000000
          }
        ]
      }
      ```
    </CodeGroup>

    | Field            | Type   | Description                                                  |
    | ---------------- | ------ | ------------------------------------------------------------ |
    | `id`             | string | The delivery job ID                                          |
    | `status`         | string | Delivery status: done, canceled, or failed                   |
    | `delivery_files` | array  | List of delivered files with filename and delivery timestamp |

    <Tip>
      Poll this endpoint until status is "done". For large snapshots with `batch_size` set, `delivery_files` will contain multiple entries, one per batch file.
    </Tip>

    > See [Monitor Delivery](/api-reference/scrapers/management-apis/monitor-delivery) for full documentation.
  </Accordion>

  <Accordion title="End-to-end workflow" icon="arrows-left-right">
    Here's the complete flow from triggering a collection to receiving your data:

    <Steps>
      <Step title="Trigger a collection or filter a dataset">
        This creates a snapshot and returns a `snapshot_id`.

        <CodeGroup>
          ```sh Request theme={null}
          curl -X POST "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_l1viktl72bvl7bjuj0" \
            -H "Authorization: Bearer YOUR_API_KEY" \
            -H "Content-Type: application/json" \
            -d '[{"url": "https://example.com/product/123"}]'
          ```

          ```Response theme={null}
          {"snapshot_id": "snap_m2bxug4e2o352v1jv1"}
          ```
        </CodeGroup>
      </Step>

      <Step title="Wait for the snapshot to be ready">
        Poll the snapshot metadata endpoint until status is "ready".

        <CodeGroup>
          ```sh Request theme={null}
          curl "https://api.brightdata.com/datasets/snapshots/snap_m2bxug4e2o352v1jv1" \
            -H "Authorization: Bearer YOUR_API_KEY"
          ```

          ```json Response theme={null}
          {
            "status": "ready",
            "dataset_size": 50000,
            "file_size": 250000000
          }
          ```
        </CodeGroup>
      </Step>

      <Step title="Deliver the snapshot">
        Call this endpoint with the snapshot ID and your delivery configuration.

        <CodeGroup>
          ```sh Request theme={null}
          curl -X POST "https://api.brightdata.com/datasets/snapshots/snap_m2bxug4e2o352v1jv1/deliver" \
            -H "Authorization: Bearer YOUR_API_KEY" \
            -H "Content-Type: application/json" \
            -d '{
                "deliver": {
                  "type": "webhook",
                  "filename": {"template": "my-data", "extension": "json"},
                  "endpoint": "https://example.com/webhook"
                }
            }'
          ```

          ```json Response theme={null}
          {
            "id": "del_abc123xyz"
          }
          ```
        </CodeGroup>
      </Step>

      <Step title="Track the delivery">
        Use the delivery job ID to monitor progress.

        <CodeGroup>
          ```sh Request theme={null}
          curl "https://api.brightdata.com/datasets/v3/delivery/del_abc123xyz" \
            -H "Authorization: Bearer YOUR_API_KEY"
          ```

          ```json Response theme={null}
          {
            "id": "del_abc123xyz",
            "status": "done",
            "delivery_files": [...]
          }
          ```
        </CodeGroup>
      </Step>
    </Steps>
  </Accordion>
</AccordionGroup>
